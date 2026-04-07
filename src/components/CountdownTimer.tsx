import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 5, mins: 59, secs: 55 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 0; mins = 0; secs = 0; }
        return { hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex justify-center gap-2">
      {[
        { val: time.hours, label: "Hours" },
        { val: time.mins, label: "Mins" },
        { val: time.secs, label: "Secs" },
      ].map((t, i) => (
        <div key={t.label} className="flex items-center gap-2">
          <div className="bg-secondary rounded-lg px-3 py-2 min-w-[56px]">
            <p className="text-2xl font-black text-price">{pad(t.val)}</p>
            <p className="text-[10px] text-muted-foreground">{t.label}</p>
          </div>
          {i < 2 && <span className="text-2xl font-bold text-muted-foreground">:</span>}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
