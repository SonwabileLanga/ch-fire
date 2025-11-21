// Using Resend REST API for browser compatibility
// Note: If you encounter CORS errors, you may need to create a backend API endpoint
// or use Resend's server-side SDK instead
const RESEND_API_KEY = 're_V8PPbGSN_HiCcywAqhbmD1M4eNwNdTy8H';
const RESEND_API_URL = 'https://api.resend.com/emails';

// Note: Update FROM_EMAIL to your verified domain email after setting up domain in Resend
// For now using Resend's default domain. To use custom domain: 'CH Fire Services <noreply@yourdomain.com>'
const FROM_EMAIL = 'CH Fire Services <onboarding@resend.dev>';
const TO_EMAIL = 'langasonwabile1993@gmail.com';

// Helper function to send email via Resend REST API
const sendEmail = async (to: string[], subject: string, html: string, replyTo?: string) => {
  try {
    const payload = {
      from: FROM_EMAIL,
      to: to,
      subject: subject,
      html: html,
    };

    // Add reply_to only if provided
    if (replyTo) {
      payload.reply_to = replyTo;
    }

    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Resend API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: responseData,
      });
      throw new Error(responseData.message || responseData.error?.message || 'Failed to send email');
    }

    console.log('Email sent successfully:', responseData);
    return responseData;
  } catch (error: any) {
    console.error('Email API error:', error);
    // Return more detailed error information
    throw new Error(error.message || 'Failed to send email. Please check console for details.');
  }
};

export interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  address: string;
  message?: string;
}

export interface QuoteEmailData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  propertyType: string;
  serviceType: string;
  propertySize: string;
  address: string;
  city: string;
  postalCode: string;
  urgency: string;
  budget?: string;
  timeline?: string;
  additionalInfo?: string;
}

export interface NewsletterEmailData {
  email: string;
}

export const sendBookingEmail = async (data: BookingEmailData) => {
  try {
    const html = `
      <h2>New Service Booking Request</h2>
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      
      <h3>Service Details</h3>
      <p><strong>Service Type:</strong> ${data.service}</p>
      <p><strong>Preferred Date:</strong> ${data.date}</p>
      <p><strong>Preferred Time:</strong> ${data.time}</p>
      <p><strong>Service Address:</strong> ${data.address}</p>
      ${data.message ? `<p><strong>Additional Notes:</strong> ${data.message}</p>` : ''}
      
      <hr>
      <p><em>This email was sent from the CH Fire Services website booking form.</em></p>
    `;

    // Send to admin first
    const adminResult = await sendEmail(
      [TO_EMAIL],
      `New Service Booking: ${data.service}`,
      html,
      data.email
    );

    // Then send confirmation to customer
    const customerHtml = `
      <h2>Thank You for Your Booking Request!</h2>
      <p>Dear ${data.name},</p>
      <p>We have received your service booking request and will contact you shortly to confirm the details.</p>
      <h3>Your Booking Details:</h3>
      <p><strong>Service Type:</strong> ${data.service}</p>
      <p><strong>Preferred Date:</strong> ${data.date}</p>
      <p><strong>Preferred Time:</strong> ${data.time}</p>
      <p><strong>Service Address:</strong> ${data.address}</p>
      <p>Our team will review your request and get back to you within 24 hours.</p>
      <hr>
      <p><em>CH Fire Services - Professional Fire Protection Solutions</em></p>
    `;

    try {
      await sendEmail(
        [data.email],
        `Booking Confirmation: ${data.service}`,
        customerHtml
      );
    } catch (customerError) {
      console.warn('Failed to send customer confirmation, but admin email was sent:', customerError);
    }

    return { success: true, data: adminResult };
  } catch (error: any) {
    console.error('Error sending booking email:', error);
    return { success: false, error: error.message || 'Unknown error' };
  }
};

export const sendQuoteEmail = async (data: QuoteEmailData) => {
  try {
    const html = `
      <h2>New Quote Request</h2>
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
      
      <h3>Property Details</h3>
      <p><strong>Property Type:</strong> ${data.propertyType}</p>
      <p><strong>Property Size:</strong> ${data.propertySize}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Postal Code:</strong> ${data.postalCode}</p>
      
      <h3>Service Requirements</h3>
      <p><strong>Service Type:</strong> ${data.serviceType}</p>
      <p><strong>Urgency:</strong> ${data.urgency}</p>
      ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
      ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
      ${data.additionalInfo ? `<p><strong>Additional Information:</strong> ${data.additionalInfo}</p>` : ''}
      
      <hr>
      <p><em>This email was sent from the CH Fire Services website quote request form.</em></p>
    `;

    // Send to admin first
    const adminResult = await sendEmail(
      [TO_EMAIL],
      `New Quote Request: ${data.serviceType}`,
      html,
      data.email
    );

    // Then send confirmation to customer
    const customerHtml = `
      <h2>Thank You for Your Quote Request!</h2>
      <p>Dear ${data.name},</p>
      <p>We have received your quote request and will prepare a detailed estimate for you.</p>
      <h3>Your Request Details:</h3>
      <p><strong>Service Type:</strong> ${data.serviceType}</p>
      <p><strong>Property Type:</strong> ${data.propertyType}</p>
      <p><strong>Property Size:</strong> ${data.propertySize}</p>
      <p><strong>Urgency:</strong> ${data.urgency}</p>
      <p>Our team will review your requirements and send you a detailed quote within 24 hours.</p>
      <hr>
      <p><em>CH Fire Services - Professional Fire Protection Solutions</em></p>
    `;

    try {
      await sendEmail(
        [data.email],
        `Quote Request Confirmation`,
        customerHtml
      );
    } catch (customerError) {
      console.warn('Failed to send customer confirmation, but admin email was sent:', customerError);
    }

    return { success: true, data: adminResult };
  } catch (error: any) {
    console.error('Error sending quote email:', error);
    return { success: false, error: error.message || 'Unknown error' };
  }
};

export const sendNewsletterEmail = async (data: NewsletterEmailData) => {
  try {
    // Send confirmation to subscriber
    const confirmationHtml = `
      <h2>Welcome to CH Fire Services Newsletter!</h2>
      <p>Thank you for subscribing to our newsletter. You'll receive:</p>
      <ul>
        <li>Fire safety tips and best practices</li>
        <li>Industry news and updates</li>
        <li>Exclusive offers and promotions</li>
        <li>Compliance and regulation updates</li>
      </ul>
      <p>We're excited to keep you informed about fire protection and safety.</p>
      <hr>
      <p><em>CH Fire Services - Professional Fire Protection Solutions</em></p>
    `;

    const result = await sendEmail(
      [data.email],
      'Welcome to CH Fire Services Newsletter',
      confirmationHtml
    );

    // Also notify admin
    const adminHtml = `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
    `;

    await sendEmail(
      [TO_EMAIL],
      'New Newsletter Subscription',
      adminHtml
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    return { success: false, error };
  }
};

