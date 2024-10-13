import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/-5XY5g8_r4o?si=N1Iasos_an2c9WxQ"
        thumbnailSrc="./stream1.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/-5XY5g8_r4o?si=N1Iasos_an2c9WxQ"
        thumbnailSrc="./stream1.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
