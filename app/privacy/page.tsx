"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[300px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how Neurons Knight ("we," "us," or "our")
            collects, uses, and protects your personal information when you use our
            website and services.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Course progress and performance data</li>
            <li>Communications with us</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Process your payments</li>
            <li>Send you updates and marketing communications</li>
            <li>Respond to your inquiries</li>
            <li>Maintain security of our platform</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information
            with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>
              Other parties with your consent or as necessary to protect our rights
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to certain processing of your information</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us
            at:
          </p>
          <p>
            Email: privacy@chessacademy.com
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Address: 123 Chess Street, NY 10001
          </p>
        </div>
      </section>
    </div>
  );
}