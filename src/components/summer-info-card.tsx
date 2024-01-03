interface InfoCardProps {
  desc: string;
  img: React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>;
  title: string;
}

const SummerInfoCard: React.FC<InfoCardProps> = ({
  desc,
  img: SvgComponent,
  title,
}) => {
  return (
    <div className="flex-row-container" id="summer-card">
      <div className="flex-column">
        <div className="info-svg">
          <SvgComponent />
        </div>
        <div className="info-title" id="card-title">
          {title}
        </div>
      </div>
      <div className="info-description" id="card-description">
        {desc}
      </div>
    </div>
  );
};

export default SummerInfoCard;
