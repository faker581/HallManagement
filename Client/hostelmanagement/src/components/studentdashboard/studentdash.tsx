import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function HomeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

function Avatar({ className, children }: AvatarProps) {
  return (
    <div className={`relative rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

function AvatarImage({ src, alt }: AvatarImageProps) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

interface AvatarFallbackProps {
  children: React.ReactNode;
}

function AvatarFallback({ children }: AvatarFallbackProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700 text-xl font-semibold">
      {children}
    </div>
  );
}

export default function StudentDash() {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://placehold.co/600x400" alt="Student Avatar" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <div className="text-2xl font-semibold">John Doe</div>
          <div className="text-base text-gray-500">Roll No. 123</div>
        </div>
        <div className="flex items-center gap-3">
          <HomeIcon className="w-6 h-6 text-gray-500" />
          <div className="text-base text-gray-500">Room 301, Sd Hall of Residence</div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 text-center">
            <div className="text-base font-medium">Date of Birth</div>
            <div className="text-base text-gray-500">May 15, 1998</div>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="text-base font-medium">Enrollment Date</div>
            <div className="text-base text-gray-500">September 1, 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
}
