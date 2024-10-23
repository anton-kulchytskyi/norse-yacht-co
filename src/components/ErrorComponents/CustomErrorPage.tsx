type CustomErrorPageProps = {
  message: string;
};

const CustomErrorPage = ({ message }: CustomErrorPageProps) => {
  return (
    <div className="text-center pb-4">
      <div className="flex justify-center items-baseline">
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary mr-3 md:mr-12">
          5
        </span>
        <span className="flex items-center font-bEs text-[400px] sm:text-[700px] md:text-[750px] text-secondary-100 mr-3 md:mr-12 -mb-4 leading-none">
          0
        </span>
        <span className="flex items-center font-baiJ text-[150px] sm:text-[260px] md:text-[288px] font-bold text-primary">
          3
        </span>{' '}
      </div>
      <p className="font-baiJ text-3xl md:text-4xl font-medium mb-6">
        {message}
      </p>
    </div>
  );
};

export default CustomErrorPage;
