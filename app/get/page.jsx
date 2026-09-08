import GetAppView from "../../components/download/GetAppView";

const shareImageUrl = "https://nexahomeapp.com/home-owner.png";

export const metadata = {
  title: "Download NexaHome | Official Homeowners App",
  description:
    "Download the NexaHome app for iOS and Android. Connect with local, verified home service experts in your neighborhood.",
  openGraph: {
    title: "Download NexaHome | Official Homeowners App",
    description:
      "Download the NexaHome app for iOS and Android. Connect with local, verified home service experts in your neighborhood.",
    url: "https://nexahomeapp.com/get",
    images: [
      {
        url: shareImageUrl,
        width: 1200,
        height: 630,
        alt: "NexaHome Homeowner App Download",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download NexaHome | Official Homeowners App",
    description:
      "Download the NexaHome app for iOS and Android. Connect with local, verified home service experts in your neighborhood.",
    images: [shareImageUrl],
  },
};

export default function GetPage() {
  return <GetAppView />;
}
