'use client'
import React from 'react';

export default function ContactForm() {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
        <p className="text-muted-foreground md:text-xl">
          Have a question or would like to arrange a tour? Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); /* Add submission logic here */ }}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary min-h-[150px]"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Submit Contact Form"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
