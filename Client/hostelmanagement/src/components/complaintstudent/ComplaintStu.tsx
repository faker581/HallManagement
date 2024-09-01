'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function ComplaintStudent() {
    const [formData, setFormData] = useState<{
        username: string;
        rollNumber: string;
        email: string;
        subject: string;
        description: string;
        image: File | null;
    }>({
        username: '',
        rollNumber: '',
        email: '',
        subject: '',
        description: '',
        image: null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      setFormData(prev => ({ ...prev, image: file }));
  };
  

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Create a FormData object
        const data = new FormData();
        data.append('username', formData.username);
        data.append('rollNumber', formData.rollNumber);
        data.append('email', formData.email);
        data.append('subject', formData.subject);
        data.append('description', formData.description);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const response = await fetch('/api/complaints/submit/', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                console.log('Submission successful');
                // Handle successful submission (e.g., show a success message)
            } else {
                console.error('Submission failed');
                const errorData = await response.json();
                console.error(errorData);
                // Handle errors (e.g., show an error message)
            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network errors
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">File a Complaint</h2>
                <p className="text-gray-500 mb-6">
                    We take your feedback seriously. Please provide the details of your complaint below.
                </p>
                <form className="grid gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid gap-2">
                        <label htmlFor="username" className="text-gray-700 font-medium">
                            Name
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.username}
                            onChange={handleChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="email" className="text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="rollNumber" className="text-gray-700 font-medium">
                            Roll Number
                        </label>
                        <input
                            id="rollNumber"
                            name="rollNumber"
                            type="text"
                            placeholder="Enter your roll number"
                            value={formData.rollNumber}
                            onChange={handleChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="image" className="text-gray-700 font-medium">
                            Image of the Problem
                        </label>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            onChange={handleImageChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="subject" className="text-gray-700 font-medium">
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Briefly describe your complaint"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="description" className="text-gray-700 font-medium">
                            Details
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Provide more information about your complaint"
                            value={formData.description}
                            onChange={handleChange}
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Submit Complaint
                    </button>
                    <h2 className="font-medium py-2 px-2">Waiting queue: 45</h2>
                </form>
            </div>
        </div>
    );
}
