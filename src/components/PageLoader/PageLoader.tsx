import Image from 'next/image';

const PageLoader = () => {
  const loadingImg: string =
    'https://cdn.auth0.com/blog/hello-auth0/loader.svg';

  return (
    <div className="loader">
      <Image src={loadingImg} alt="Loading..." height={50} width={50} />
    </div>
  );
};

export default PageLoader;
