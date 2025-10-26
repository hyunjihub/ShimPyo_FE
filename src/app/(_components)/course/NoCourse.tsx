import Image from 'next/image';
import noCourse from '/public/images/noCourse.svg';

export default function NoCourse() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto">
      <Image className="mb-[24px]" src={noCourse} alt="결과 없음" width={172} height={95} />
      <p className="text-xs text-g1 tracking-[-0.02em]">해당 날짜의 코스를 준비하고 있어요</p>
      <p className="text-sm text-b3 font-semibold tracking-[-0.013em]">다른 날짜의 코스를 먼저 확인해 보세요!</p>
    </div>
  );
}
