const Skill = ({ Icon, color, label, description, years }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border border-neutral-800 p-4 hover:bg-neutral-900 transition">
      <div className="flex items-center space-x-4 mb-3 sm:mb-0">
        <div className={`rounded-lg p-3 text-4xl ${color}`}>
          <Icon />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">{label}</h2>
          <p className="text-sm text-neutral-400">{description}</p>
        </div>
      </div>
      <div className="flex items-center text-cyan-400 text-xl font-bold">
        <span className="mr-3 h-6 w-[3px] rounded-full bg-cyan-400"></span>
        {years} yrs
      </div>
    </div>
  );
};

export default Skill;
