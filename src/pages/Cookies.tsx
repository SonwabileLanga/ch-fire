import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Cookie, Shield, Settings, Info, AlertCircle, CheckCircle2 } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cookie <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Learn about how we use cookies and how you can manage your preferences
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card className="border-2 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This Cookie Policy explains how CH Fire Services ("we", "us", or "our") uses cookies and similar 
                  technologies on our website to recognize you when you visit and use our services.
                </p>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Types of Cookies We Use
                </CardTitle>
                <CardDescription>
                  We use different types of cookies for various purposes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Essential Cookies
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable basic functions like 
                      page navigation, access to secure areas, and remembering your cookie preferences. These cookies 
                      cannot be disabled in our systems.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Examples:</strong> Cookie consent preferences, session management
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting 
                      information anonymously. This helps us improve our website's performance and user experience.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Examples:</strong> Page views, time spent on site, traffic sources
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary/60">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      Functional Cookies
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      These cookies allow the website to remember choices you make (such as your username, language, or region) 
                      and provide enhanced, more personalized features.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Examples:</strong> Language preferences, form data, user settings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Cookies */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  How We Use Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To remember your preferences and settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To analyze website traffic and usage patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To improve website functionality and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To ensure website security and prevent fraud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>To provide personalized content and features</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you 
                  can usually modify your browser settings to decline cookies if you prefer.
                </p>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Browser Settings</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    You can control cookies through your browser settings. Here are links to cookie management for popular browsers:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li>• <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    <li>• <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Important Note</h4>
                      <p className="text-sm text-muted-foreground">
                        If you choose to disable cookies, some features of our website may not function properly. 
                        Essential cookies are required for the website to work and cannot be disabled.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Third-Party Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
                  of the website and deliver advertisements on and through the website.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, we use the following third-party services that may set cookies:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Google Analytics (if enabled) - for website analytics</li>
                  <li>Social media platforms - for social sharing features</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  These third parties may use cookies to collect information about your online activities across different 
                  websites. We do not control these third-party cookies, and you should check the respective privacy policies 
                  of these third parties for more information.
                </p>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '500ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Updates to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                  operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie 
                  Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Questions About Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@chfireservices.co.za" className="text-primary hover:underline">
                      info@chfireservices.co.za
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:0619065523" className="text-primary hover:underline">
                      061 906 5523 (Clayton)
                    </a>
                    {" or "}
                    <a href="tel:0612341748" className="text-primary hover:underline">
                      061 234 1748 (Dominique)
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> 3 Keerom Street, Mossel Bay, South Africa
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Cookies;

