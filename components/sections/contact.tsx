import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-20 container mx-auto px-4 md:px-6">
            <div className="mb-12">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                    <span className="w-12 h-1 bg-white"></span>
                    GET IN TOUCH
                </h2>
            </div>

            <Card className="p-8 md:p-12 bg-[#0a0a0a] border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Contact Information */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Email</p>
                                <p className="text-gray-200 font-medium">brian@melly.dev</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Phone</p>
                                <p className="text-gray-200 font-medium">+254 700 000 000</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Location</p>
                                <p className="text-gray-200 font-medium">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium">Your Name</label>
                            <input
                                type="text"
                                placeholder="What's your name?"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium">Your Email</label>
                            <input
                                type="email"
                                placeholder="What's your email?"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium">Your Message</label>
                            <textarea
                                placeholder="What would you like to say?"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                            ></textarea>
                        </div>

                        <Button className="w-full bg-white text-black hover:bg-gray-200 h-14 font-bold text-lg rounded-lg uppercase tracking-widest">
                            Send Message
                        </Button>
                    </form>
                </div>
            </Card>

            <footer className="text-center text-gray-500 text-sm border-t border-white/5 pt-10 flex flex-col items-center gap-2">
                <p>&copy; {new Date().getFullYear()} Brian Melly. All rights reserved.</p>
                <p className="text-xs uppercase tracking-widest text-gray-600">Crafted with passion and precision</p>
            </footer>
        </section>
    );
}
