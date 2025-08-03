import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Upload, UserPlus } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import { uploadFileWithRetry } from '@/utils/fileUpload';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
  // Initialize EmailJS
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    yearOfStudy: "",
    whyJoin: "",
    skills: "",
    resume: null as File | null,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const branches = [
    "Artificial Intelligence and Data Science",
    "Computer Science",
    "Information Technology",
    "Electronics and Telecommunication",
    "Mechanical",
    "Civil",
    "Other"
  ];

  const years = ["1st", "2nd", "3rd", "4th"];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.branch) {
      newErrors.branch = "Please select your branch";
    }

    if (!formData.yearOfStudy) {
      newErrors.yearOfStudy = "Please select your year of study";
    }

    if (!formData.whyJoin.trim()) {
      newErrors.whyJoin = "Please tell us why you want to join";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Please list your skills";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        let resumeDownloadLink = 'No resume uploaded';
        
        // Upload resume file if provided
        if (formData.resume) {
          try {
            resumeDownloadLink = await uploadFileWithRetry(formData.resume);
          } catch (uploadError) {
            console.error('All upload methods failed:', uploadError);
            resumeDownloadLink = `${formData.resume.name} (Upload failed - file name only)`;
          }
        }

        // Prepare template parameters for EmailJS
        const templateParams = {
          to_email: EMAILJS_CONFIG.TO_EMAIL,
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          branch: formData.branch,
          year_of_study: formData.yearOfStudy,
          why_join: formData.whyJoin,
          skills: formData.skills,
          resume_file: formData.resume ? formData.resume.name : 'No file uploaded',
          resume_download_link: resumeDownloadLink,
          resume_data: resumeDownloadLink !== 'No resume uploaded' ? resumeDownloadLink : '',
          message: `New registration from ${formData.fullName} (${formData.email})`
        };

        // Send email using EmailJS
        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );

        if (response.status === 200) {
          alert("Registration submitted successfully! We'll get back to you soon.");
          onClose();
          // Reset form
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            branch: "",
            yearOfStudy: "",
            whyJoin: "",
            skills: "",
            resume: null,
            agreeToTerms: false,
          });
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        alert("Failed to send registration. Please try again or contact us directly.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (allowedTypes.includes(file.type)) {
        setFormData(prev => ({ ...prev, resume: file }));
        setErrors(prev => ({ ...prev, resume: "" }));
      } else {
        setErrors(prev => ({ ...prev, resume: "Please upload only PDF or DOC files" }));
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join ROI Tech Club
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-primary"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className={errors.fullName ? "border-destructive" : ""}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email ID *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={errors.email ? "border-destructive" : ""}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className={errors.phone ? "border-destructive" : ""}
              placeholder="Enter your 10-digit phone number"
              maxLength={10}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          {/* Branch and Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="branch" className="text-sm font-medium">
                Branch / Department *
              </Label>
              <Select
                value={formData.branch}
                onValueChange={(value) => setFormData(prev => ({ ...prev, branch: value }))}
              >
                <SelectTrigger className={errors.branch ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch} value={branch}>
                      {branch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.branch && (
                <p className="text-sm text-destructive">{errors.branch}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearOfStudy" className="text-sm font-medium">
                Year of Study *
              </Label>
              <Select
                value={formData.yearOfStudy}
                onValueChange={(value) => setFormData(prev => ({ ...prev, yearOfStudy: value }))}
              >
                <SelectTrigger className={errors.yearOfStudy ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year} Year
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.yearOfStudy && (
                <p className="text-sm text-destructive">{errors.yearOfStudy}</p>
              )}
            </div>
          </div>

          {/* Why Join */}
          <div className="space-y-2">
            <Label htmlFor="whyJoin" className="text-sm font-medium">
              Why do you want to join the club? *
            </Label>
            <Textarea
              id="whyJoin"
              value={formData.whyJoin}
              onChange={(e) => setFormData(prev => ({ ...prev, whyJoin: e.target.value }))}
              className={errors.whyJoin ? "border-destructive" : ""}
              placeholder="Tell us about your motivation to join ROI Tech Club..."
              rows={4}
            />
            {errors.whyJoin && (
              <p className="text-sm text-destructive">{errors.whyJoin}</p>
            )}
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <Label htmlFor="skills" className="text-sm font-medium">
              Skills *
            </Label>
            <Textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
              className={errors.skills ? "border-destructive" : ""}
              placeholder="List your technical skills, programming languages, tools, etc..."
              rows={4}
            />
            {errors.skills && (
              <p className="text-sm text-destructive">{errors.skills}</p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume" className="text-sm font-medium">
              Upload Resume or Portfolio (Optional)
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById("resume")?.click()}
                className="flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Choose File</span>
              </Button>
              {formData.resume && (
                <span className="text-sm text-muted-foreground">
                  {formData.resume.name}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX (Max 5MB)
            </p>
            {errors.resume && (
              <p className="text-sm text-destructive">{errors.resume}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                }
                className="mt-1"
              />
              <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                I agree to follow the club's rules and code of conduct *
              </Label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-destructive">{errors.agreeToTerms}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Join Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 