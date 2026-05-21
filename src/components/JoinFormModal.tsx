import React, { useState } from 'react';
import { X, User, ShieldAlert, ArrowRight, ArrowLeft, CheckCircle, CreditCard, Send } from 'lucide-react';
import { MemberFormData } from '../types';

interface JoinFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinFormModal({ isOpen, onClose }: JoinFormModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<MemberFormData>({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    ukAddress: '',
    postalCode: '',
    zambianOriginDetail: '',
    beneficiaryName: '',
    beneficiaryContact: '',
    hasChildren: false,
    childNames: '',
    acceptDeclaration: false
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof MemberFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validateStep = (currentStep: number) => {
    const errors: typeof formErrors = {};
    if (currentStep === 1) {
      if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Please provide a valid email';
      }
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
      if (!formData.dob.trim()) errors.dob = 'Date of birth is required';
    } else if (currentStep === 2) {
      if (!formData.ukAddress.trim()) errors.ukAddress = 'UK residential address is required';
      if (!formData.postalCode.trim()) errors.postalCode = 'Postal Code is required';
      if (!formData.zambianOriginDetail.trim()) errors.zambianOriginDetail = 'Please provide origin details (e.g. Town, Chief, or Family Link)';
    } else if (currentStep === 3) {
      if (!formData.beneficiaryName.trim()) errors.beneficiaryName = "A legal beneficiary name is required for payout dispatch";
      if (!formData.beneficiaryContact.trim()) errors.beneficiaryContact = "Beneficiary's contact is required";
      if (formData.hasChildren && !formData.childNames.trim()) {
        errors.childNames = 'Please list your child dependents under 18';
      }
    } else if (currentStep === 4) {
      if (!formData.acceptDeclaration) {
        errors.acceptDeclaration = 'You must declare and accept the community charter rules.';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val
    }));

    // Clear dynamic error
    if (formErrors[name as keyof MemberFormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    // Simulate API registration request and payment integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white text-neutral-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-100 flex flex-col max-h-[90vh]"
        id="join-now-modal"
      >
        {/* Zebra Flag strip top */}
        <div className="h-1 bg-gradient-to-r from-emerald-600 via-neutral-900 to-orange-500" />

        {/* Modal Header */}
        <div className="px-6 py-4.5 border-b border-neutral-100 flex justify-between items-center bg-neutral-50 shrink-0">
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-neutral-900">
              {isSubmitted ? 'Registration Successful' : 'Membership Registration'}
            </h3>
            <p className="text-[10px] text-neutral-500 font-semibold tracking-wider uppercase">
              Twende Zambia UK Pool
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress tracker */}
        {!isSubmitted && (
          <div className="px-6 py-3.5 bg-emerald-50/50 border-b border-emerald-100 flex items-center justify-between text-xs font-bold shrink-0">
            <span className="text-emerald-800">Step {step} of 4</span>
            <div className="flex gap-1.5 scrollbar-none">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s} 
                  className={`w-5 h-1.5 rounded-full transition-all ${
                    step >= s ? 'bg-emerald-600' : 'bg-neutral-200'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal content body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4" id="registration-success-message">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-black text-xl text-neutral-900">Application Submitted!</h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                Thank you for applying to join Twende Zambia UK. Your registration is recorded in our system. An associate will review your credentials and welcome you to the private paid members WhatsApp group.
              </p>

              <div className="p-4 bg-orange-50 border border-orange-100 text-left rounded-xl space-y-2 text-xs">
                <span className="font-bold text-orange-950 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-orange-600" />
                  Upcoming Step: Subscription Payment (£10)
                </span>
                <p className="text-neutral-700">
                  To activate your membership, you will receive an automatic Stripe/PayPal invoice at <strong>{formData.email}</strong>. Once paid, the 6-month qualification tracker will immediately boot.
                </p>
                <div className="pt-2 flex gap-2">
                  <a 
                    href="https://chat.whatsapp.com/demo" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-md hover:bg-emerald-500 transition-colors inline-block"
                  >
                    Enter Demo WhatsApp group
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-bold font-sans tracking-wide"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4.5">
              
              {/* STEP 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-4" id="modal-step-1">
                  <div className="pb-2 border-b border-neutral-100">
                    <h4 className="font-bold text-sm text-neutral-800">Primary Contact Information</h4>
                    <p className="text-[11px] text-zinc-500">Provide legal details matching your UK and Zambian residency records.</p>
                  </div>
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-neutral-700 uppercase">Full Legal Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Jane Mwape Musonda"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                    />
                    {formErrors.fullName && <p className="text-red-500 text-[11px] font-semibold">{formErrors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-neutral-700 uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="j.musonda@example.co.uk"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                    />
                    {formErrors.email && <p className="text-red-500 text-[11px] font-semibold">{formErrors.email}</p>}
                  </div>

                  {/* Phone & DoB Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-700 uppercase">UK Mobile Phone</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="+44 7123 456789"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                      />
                      {formErrors.phone && <p className="text-red-500 text-[11px] font-semibold">{formErrors.phone}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-700 uppercase">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                      />
                      {formErrors.dob && <p className="text-red-500 text-[11px] font-semibold">{formErrors.dob}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Address and Heritage */}
              {step === 2 && (
                <div className="space-y-4" id="modal-step-2">
                  <div className="pb-2 border-b border-neutral-100">
                    <h4 className="font-bold text-sm text-neutral-800">Residency & Diaspora Verification</h4>
                    <p className="text-[11px] text-zinc-500">Provide proof points of UK residency and links to Zambian heritage.</p>
                  </div>

                  {/* UK Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-neutral-700 uppercase">UK Residential Address</label>
                    <textarea
                      name="ukAddress"
                      rows={2}
                      placeholder="12 Baker Streer, Birmingham"
                      value={formData.ukAddress}
                      onChange={handleChange}
                      className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                    />
                    {formErrors.ukAddress && <p className="text-red-500 text-[11px] font-semibold">{formErrors.ukAddress}</p>}
                  </div>

                  {/* Postal Code */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-neutral-700 uppercase">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="B1 1BB"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                    />
                    {formErrors.postalCode && <p className="text-red-500 text-[11px] font-semibold">{formErrors.postalCode}</p>}
                  </div>

                  {/* Zambian Heritage origin proof */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-neutral-700 uppercase">Zambian Origin Details</label>
                    <textarea
                      name="zambianOriginDetail"
                      rows={2}
                      placeholder="e.g. Born in Kitwe town, or Family connections in Lusaka / spouse of Zambian passport holder."
                      value={formData.zambianOriginDetail}
                      onChange={handleChange}
                      className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium animate-none"
                    />
                    {formErrors.zambianOriginDetail && <p className="text-red-500 text-[11px] font-semibold">{formErrors.zambianOriginDetail}</p>}
                  </div>
                </div>
              )}

              {/* STEP 3: Beneficiary and Children */}
              {step === 3 && (
                <div className="space-y-4" id="modal-step-3">
                  <div className="pb-2 border-b border-neutral-100">
                    <h4 className="font-bold text-sm text-neutral-800">Beneficiary Designations</h4>
                    <p className="text-[11px] text-zinc-500">Nominate who will legally receive the £10,000 payout during a bereavement claim.</p>
                  </div>

                  {/* Beneficiary Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-neutral-700 uppercase">Primary Legal Beneficiary Name</label>
                    <input
                      type="text"
                      name="beneficiaryName"
                      placeholder="John Kennedy Musonda (Husband)"
                      value={formData.beneficiaryName}
                      onChange={handleChange}
                      className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                    />
                    {formErrors.beneficiaryName && <p className="text-red-500 text-[11px] font-semibold">{formErrors.beneficiaryName}</p>}
                  </div>

                  {/* Beneficiary Contact */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-neutral-700 uppercase">Beneficiary Contact Number / Address</label>
                    <input
                      type="text"
                      name="beneficiaryContact"
                      placeholder="+44 7456 112233"
                      value={formData.beneficiaryContact}
                      onChange={handleChange}
                      className="w-full text-sm px-3.5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                    />
                    {formErrors.beneficiaryContact && <p className="text-red-500 text-[11px] font-semibold">{formErrors.beneficiaryContact}</p>}
                  </div>

                  {/* Children register check */}
                  <div className="pt-2 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        id="hasChildren"
                        name="hasChildren"
                        checked={formData.hasChildren}
                        onChange={handleChange}
                        className="w-4.5 h-4.5 rounded-sm border-neutral-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                      />
                      <label htmlFor="hasChildren" className="text-xs sm:text-sm font-semibold text-neutral-800 cursor-pointer select-none">
                        Do you want to register under-18 children? (£5/year per child)
                      </label>
                    </div>

                    {formData.hasChildren && (
                      <div className="p-3.5 bg-neutral-50/50 border border-neutral-200/80 rounded-xl space-y-2">
                        <label className="block text-xs font-bold text-neutral-700 uppercase">List Children Names (Include birth dates)</label>
                        <textarea
                          name="childNames"
                          rows={2}
                          placeholder="e.g. 1. David Musonda (DoB: 12/10/2014), 2. Angela Musonda (DoB: 05/01/2018)"
                          value={formData.childNames}
                          onChange={handleChange}
                          className="w-full text-sm px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-neutral-300 font-medium"
                        />
                        {formErrors.childNames && <p className="text-red-500 text-[11px] font-semibold">{formErrors.childNames}</p>}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 4: Submit, Declaration and Admin Preview */}
              {step === 4 && (
                <div className="space-y-4" id="modal-step-4">
                  <div className="pb-2 border-b border-neutral-100">
                    <h4 className="font-bold text-sm text-neutral-800">Final Declaration & Accord</h4>
                    <p className="text-[11px] text-zinc-500">Please review your commitment to Twende Zambia UK communal pool.</p>
                  </div>

                  {/* Review breakdown summarized */}
                  <div className="p-4 bg-neutral-900 text-neutral-200 text-xs rounded-xl space-y-2">
                    <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                      <span className="text-neutral-400 font-medium">Registrant:</span>
                      <span className="font-bold text-white">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                      <span className="text-neutral-400 font-medium">Selected Primary Tier:</span>
                      <span className="font-bold text-emerald-400">Adult (£10/year)</span>
                    </div>
                    {formData.hasChildren && (
                      <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                        <span className="text-neutral-400 font-medium">Children registered:</span>
                        <span className="font-bold text-orange-400">Yes (£5/yr per child)</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-medium">Claim limits:</span>
                      <span className="font-bold text-white">Up to £10,000 Support</span>
                    </div>
                  </div>

                  {/* Legal accord checks */}
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="acceptDeclaration"
                        name="acceptDeclaration"
                        checked={formData.acceptDeclaration}
                        onChange={handleChange}
                        className="w-5 h-5 rounded-sm mt-0.5 border-neutral-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer shrink-0"
                      />
                      <label htmlFor="acceptDeclaration" className="text-xs text-neutral-600 select-none cursor-pointer">
                        I hereby declare that I am of Zambian heritage/origin or family spouse, legally residing in the UK. I agree to contribute £30 toward the bereavement pool during callouts, and understand the 6-month qualification rule applies before claims activate.
                      </label>
                    </div>
                    {formErrors.acceptDeclaration && <p className="text-red-500 text-[11px] font-semibold">{formErrors.acceptDeclaration}</p>}
                  </div>

                  {/* Payment placeholder text indicating administrative readiness */}
                  <div className="p-3 bg-emerald-50 border border-emerald-100/70 text-emerald-900 rounded-lg text-xs space-y-1">
                    <span className="font-extrabold flex items-center gap-1">
                      <CreditCard className="w-3.5 h-3.5 inline" /> Stripe/PayPal Integrators Ready
                    </span>
                    <p className="leading-relaxed text-emerald-800 text-[11px]">
                      The submit pipeline prepares a customer ID in our secure UK association records, parsing billing parameters instantly. Real secure payments will launch in the upcoming live server deployment.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation controls */}
              <div className="pt-6 border-t border-neutral-100 flex justify-between gap-4 shrink-0">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 text-xs font-bold text-neutral-700 hover:text-neutral-900 flex items-center gap-1 hover:bg-neutral-100 rounded-lg transition-colors select-none"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <div /> // spacer
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 flex items-center gap-1 transition-all select-none"
                    id="modal-next-btn"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 flex items-center gap-1.5 transition-all select-none shadow-md"
                    id="modal-submit-btn"
                  >
                    {isSubmitting ? (
                      <>Processing registration...</>
                    ) : (
                      <>
                        Submit & Request WhatsApp Access 
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
