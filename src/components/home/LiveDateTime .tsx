import { useEffect, useState } from "react";

interface LiveDateTimeProps {
  timeZone?: string;
  locale?: string;
  className?: string;
}

export const LiveDateTime = ({
  timeZone = "Asia/Kolkata",
  locale = "en-IN",
  className = "",
}: LiveDateTimeProps) => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString(locale, {
        timeZone,
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setDateTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone, locale]);
  return <div className={className}>{dateTime}{" "}IST</div>;
};
