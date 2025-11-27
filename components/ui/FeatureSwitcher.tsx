"use client";
import { useState } from "react";

export default function FeatureSwitcher() {
  const [active, setActive] = useState(0);

  const images = [
    "/assets/Dashboard Screenshot in smart inventory.webp", // Raw Materials Tracking
    "/assets/Dashboard Screenshot in smart inventory.webp", // Raw Materials Tracking
    "/assets/Dashboard Screenshot in smart inventory.webp", // Raw Materials Tracking
    "/assets/Dashboard Screenshot in smart inventory.webp", // Raw Materials Tracking
    "/assets/Dashboard Screenshot in smart inventory.webp", // Raw Materials Tracking
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-[32px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 p-8 flex flex-col justify-between productivity-card-content-holder-in-inventory-management">
          <div>
            <h3 className="text-[28px] leading-[33.6px] system-usage-card-title-text-in-inventory-management font-['Sequel_Sans'] font-normal text-brand-dark tracking-[-0.56px] mb-8">
              You make the products. Our system manages the process.
            </h3>

            <button className="button explore-more-in-features-section-in-inventory-management nav-links-in-inventory-management-get-in-touch nav-links-in-inventory-management-get-in-touch type1 px-9 py-4 rounded-full bg-brand-purple  text-brand-bg font-['Sequel_Sans'] text-base font-normal hover:bg-brand-purple/90 transition-colors">
              <span>Explore more</span>
            </button>
          </div>

          <div className="space-y-0 ">
            {/* Raw Materials Tracking — NO border remove on hover */}
            <div
              onClick={() => setActive(0)}
              className={`
      py-4 hidden lg:block cursor-pointer transition px-4
      ${" border-[rgba(10,15,10,0.1)] "}
      group-hover:border-transparent 
    `}
            >
              <h4
                className={`text-lg font-['Sequel_Sans'] font-normal mb-1 row-materials-tracking-heading-in-inventory-management ${
                  active === 0 ? "text-brand-purple" : "text-brand-dark"
                }`}
              >
                Raw Materials Tracking
              </h4>

              <p className="text-base font-['Sequel_Sans'] font-normal text-brand-dark/80 row-materials-tracking-subtext-text-in-inventory-management">
                Get instant low-stock alerts to restock materials before they
                run out.
              </p>
            </div>

            <div className="group">
              {/* Production Monitoring */}
              <div
                onClick={() => setActive(1)}
                className={`
      py-4 cursor-pointer transition px-4
      ${"border-b border-t border-[rgba(10,15,10,0.1)]"}
      hover:bg-[#F5F9F5]
      group-hover:border-transparent   /* ✅ still here */
    `}
              >
                <h4
                  className={`text-lg font-['Sequel_Sans'] font-normal ${
                    active === 1 ? "text-brand-purple" : "text-brand-dark"
                  }`}
                >
                  Production Monitoring
                </h4>
              </div>

              {/* Quality Control */}
              <div
                onClick={() => setActive(2)}
                className={`
      py-4 cursor-pointer transition px-4
      ${"border-b border-[rgba(10,15,10,0.1)]"}
      hover:bg-[#F5F9F5]
      group-hover:border-transparent   /* ✅ still here */
    `}
              >
                <h4
                  className={`text-lg font-['Sequel_Sans'] font-normal ${
                    active === 2 ? "text-brand-purple" : "text-brand-dark"
                  }`}
                >
                  Quality Control & Defect Tracking
                </h4>
              </div>

              {/* Vendor Management */}
              <div
                onClick={() => setActive(3)}
                className={`
      py-4 cursor-pointer transition px-4
      ${"border-b border-[rgba(10,15,10,0.1)]"}
      hover:bg-[#F5F9F5]
      group-hover:border-transparent   /* ✅ still here */
    `}
              >
                <h4
                  className={`text-lg font-['Sequel_Sans'] font-normal ${
                    active === 3 ? "text-brand-purple" : "text-brand-dark"
                  }`}
                >
                  Vendor Management
                </h4>
              </div>

              {/* Smart Reports */}
              <div
                onClick={() => setActive(4)}
                className={`
      py-4 cursor-pointer transition px-4
      ${active === 4 ? "bg-brand-purple/5 border-transparent" : ""}
      hover:bg-[#F5F9F5]
      group-hover:border-transparent   /* ✅ still here */
    `}
              >
                <h4
                  className={`text-lg font-['Sequel_Sans'] font-normal ${
                    active === 4 ? "text-brand-purple" : "text-brand-dark"
                  }`}
                >
                  Smart Reports & Analytics
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:col-span-3 relative bg-brand-bg relative">
          <div className="absolute opacity-80">
            <div className="w-full h-full rounded-full bg-[#5B68DF]/90 z-1 blur-[273px]" />
          </div>

          <div className="relative pt-8 pl-8 background-image-for-dashboard-image-in-inventory-management">
            <img
              src={images[active]}
              alt="Dashboard Screenshot"
              className="w-full shadow-xl transition-all duration-500 rounded-tl-[16px]"
              style={{
                boxShadow:
                  "0px -4px 30px rgba(0,0,0,0.2), -4px 0px 30px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
