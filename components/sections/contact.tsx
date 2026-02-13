"use client";

import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
            } else {
                setError(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="py-20 container mx-auto px-4 md:px-6">
            <div className="mb-12">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                    <span className="w-12 h-1 bg-white"></span>
                    GET IN TOUCH
                </h2>
            </div>

            <Card className="p-8 md:p-12 bg-[#0a0a0a] border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 relative overflow-hidden">
                {isSuccess && (
                    <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm animate-in fade-in duration-500">
                        <CheckCircle2 className="w-20 h-20 text-green-500 mb-6 animate-bounce" />
                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter uppercase">Message Sent Successfully!</h3>
                        <p className="text-gray-400 max-w-md text-lg">
                            Thank you for reaching out, {formData.name || 'friend'}! I&apos;ve received your message and an auto-confirmation has been sent to your email. I&apos;ll get back to you shortly.
                        </p>
                        <Button
                            onClick={handleReset}
                            className="mt-8 bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 rounded-xl uppercase tracking-widest"
                        >
                            Send Another Message
                        </Button>
                    </div>
                )}

                {/* Contact Information */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase">Contact Information</h3>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Email</p>
                                <p className="text-gray-200 font-medium tracking-tight">Brianmelly008@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Phone</p>
                                <p className="text-gray-200 font-medium tracking-tight">+254790288540</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Location</p>
                                <p className="text-gray-200 font-medium tracking-tight uppercase">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase">Send Me a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium uppercase tracking-widest">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-all ring-offset-black focus:ring-2 focus:ring-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium uppercase tracking-widest">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-all ring-offset-black focus:ring-2 focus:ring-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium uppercase tracking-widest">Your Message</label>
                            <textarea
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="What would you like to say?"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-all ring-offset-black focus:ring-2 focus:ring-white/20 resize-none"
                            ></textarea>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm font-medium animate-pulse">{error}</p>
                        )}

                        <Button
                            disabled={isSubmitting}
                            className="w-full bg-white text-black hover:bg-gray-200 h-14 font-black text-lg rounded-xl uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                </div>
            </Card>

            <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-3xl font-black text-white tracking-tighter uppercase">
                    MELLY<span className="text-gray-500">.</span>DEV
                </div>
                <div className="flex flex-col items-center md:items-end gap-2 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Brian Melly. All rights reserved.</p>
                    <p className="text-xs uppercase tracking-widest text-gray-600">Crafted with passion and precision</p>
                </div>
            </footer>
        </section>
    );
}

