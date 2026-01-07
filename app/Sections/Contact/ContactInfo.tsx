import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

import InfoCard from "./InfoCard";
import SocialIcon from "./SocialIcon";

export default function ContactInfo() {
  return (
    <div className="order-2 lg:order-1">
      <h2 className="text-4xl font-bold mb-4">Contact Information</h2>

      <p className="text-gray-600 max-w-lg mb-10 leading-relaxed">
        Specialized service for cleaning fabric and leather furniture.
        Techniques include steam cleaning, dry foam and solvent cleaning
        to remove dirt, stains and allergens.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <InfoCard
          icon={<FaMapMarkerAlt size={20} />}
          title="Our Address"
          text={
            <>
              1801 Thorn ridge Cir.<br />
              Shewrapara, Dhaka-1209
            </>
          }
        />

        <InfoCard
          icon={<FaPhoneAlt size={18} />}
          title="Phone Number"
          text={
            <>
              +(880) 19123-00964 <br />
              +(088) 16023-90164
            </>
          }
        />

        <InfoCard
          icon={<FaEnvelope size={18} />}
          title="Email Address"
          text="support@profixbd.com"
        />

        <InfoCard
          icon={<FaClock size={18} />}
          title="Working Time"
          text={
            <>
              Thu - Fri <br />
              10:00 AM - 6:00 PM
            </>
          }
        />
      </div>

      <h4 className="font-semibold mb-2">Follow The Social Media:</h4>
      <p className="text-sm text-gray-600 mb-4">
        Ensure your clean system is ready for the hottest days.
      </p>

      <div className="flex gap-3">
        <SocialIcon><FaFacebookF /></SocialIcon>
        <SocialIcon><FaTwitter /></SocialIcon>
        <SocialIcon><FaLinkedinIn /></SocialIcon>
        <SocialIcon><FaBehance /></SocialIcon>
      </div>
    </div>
  );
}
