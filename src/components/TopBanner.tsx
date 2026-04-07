const TopBanner = () => {
  return (
    <div className="gradient-bar py-2.5 px-4 text-center sticky top-0 z-50">
      <div className="flex items-center justify-center gap-3 flex-wrap text-sm font-semibold text-primary-foreground">
        <span>🔥 LIMITED TIME OFFER</span>
        <span className="text-price-strike text-xs">₹10,000</span>
        <span className="bg-primary-foreground/20 px-3 py-0.5 rounded-full text-base font-bold">₹299</span>
        <span>⏰ ENDS SOON!</span>
        <span className="hidden sm:inline">👥 250K+ Joined</span>
      </div>
    </div>
  );
};

export default TopBanner;
