type TopRightLabelProps = {
  yachtTop: boolean;
  yachtHotPrice: boolean;
};

const TopRightLabel = ({ yachtTop, yachtHotPrice }: TopRightLabelProps) => {
  switch (true) {
    case yachtTop && yachtHotPrice:
      return 'top | hot price';
    case yachtHotPrice && !yachtTop:
      return 'hot price';
    case yachtTop && !yachtHotPrice:
      return 'top';
    default:
      return null;
  }
};

export default TopRightLabel;
