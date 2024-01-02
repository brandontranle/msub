interface InfoCardProps {
  desc: string;
  img: React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>;
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  desc,
  img: SvgComponent,
  title,
}) => {
  return (
    <div className="flex-container-column" id="info-card">
      <div className="info-svg">
        {" "}
        <SvgComponent />{" "}
      </div>
      <div className="info-title" id="card-title">
        {title}
      </div>
      <div className="info-description" id="card-description">
        {desc}
      </div>
    </div>
  );
};

export default InfoCard;
