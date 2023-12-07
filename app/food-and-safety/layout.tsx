import Tabs from "./tabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-12">
        <div
          style={{
            background: `url(${"/imgs/food-and-safety-bg.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black bg-opacity-[66%] py-28">
            <div className="container flex justify-center text-center text-white">
              <h1>Food Safety & Quality</h1>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
      <div>{children}</div>
    </div>
  );
}
