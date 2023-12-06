type ButtonProps = {
  children: React.ReactNode | string;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="w-32 lg:w-40 h-10 lg:h-12 bg-primary rounded-lg">
      {children}
    </button>
  );
}
