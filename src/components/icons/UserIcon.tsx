import React from "react";

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M352 144a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-240 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM49.3 464H462.7c-8.3-54.4-55.3-96-112-96H161.3c-56.7 0-103.6 41.6-112 96zM0 481.3C0 392.2 72.2 320 161.3 320H350.7C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3z" />
    </svg>
  );
};

export default UserIcon;
