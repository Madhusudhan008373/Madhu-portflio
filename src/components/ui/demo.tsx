import BottomNavBar from "@/components/ui/bottom-nav-bar";

export default function Demo() {
  return (
    <div className="flex min-h-[120px] w-full items-center justify-center p-4">
      <BottomNavBar autoHideAtTop={false} position="top-center" />
    </div>
  );
}
