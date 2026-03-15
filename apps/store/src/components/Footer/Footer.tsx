import { Copyright } from '@components/Copyright';

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 pb-4">
        <div className="flex gap-4">
          <div>Menu 1</div>
          <div>Menu 2</div>
          <div>Menu 3</div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};
