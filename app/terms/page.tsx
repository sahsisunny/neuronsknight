"use client";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[300px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using Neurons Knight's services, you agree to be bound
            by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. Use License</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable license to
            access and use our services for personal, non-commercial purposes.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To access certain features, you must register for an account. You agree
            to:
          </p>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain account security</li>
            <li>Not share account credentials</li>
            <li>Notify us of unauthorized access</li>
          </ul>

          <h2>4. Course Enrollment</h2>
          <p>By enrolling in courses, you acknowledge:</p>
          <ul>
            <li>Payment obligations</li>
            <li>Refund policy terms</li>
            <li>Course completion requirements</li>
            <li>Academic integrity standards</li>
          </ul>

          <h2>5. Tournament Participation</h2>
          <p>Tournament participants agree to:</p>
          <ul>
            <li>Follow fair play rules</li>
            <li>Accept tournament decisions</li>
            <li>Meet eligibility requirements</li>
            <li>Comply with anti-cheating measures</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All content and materials available through our services are protected
            by intellectual property rights and belong to Neurons Knight or its
            licensors.
          </p>

          <h2>7. User Content</h2>
          <p>
            By submitting content to our platform, you grant us a license to use,
            modify, and distribute that content.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our services for
            violations of these terms or any other reason.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            Neurons Knight shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of our services.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
            legal@chessacademy.com
          </p>
        </div>
      </section>
    </div>
  );
}