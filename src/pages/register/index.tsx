import React, { useEffect, useState } from 'react';
import Button from '@/components/shared/Button';
import RegisterIndicator from '@/components/shared/register/RegisterIndicator';
import RegisterInput from '@/components/shared/register/RegisterInput';
import { useRegisterStore } from '@/stores/register-form';
import RegisterProfileImage from '@/components/shared/register/RegisterProfileImage';
import RegisterSelectInput from '@/components/shared/register/RegisterSelectInput';
import RegisterMobileCarrierInput from '@/components/shared/register/RegisterMobileCarrierInput';

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const store = useRegisterStore();

  useEffect(() => {
    setStep(1);
  }, []);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <RegisterIndicator step={step}>소속 대학교는 어디인가요?</RegisterIndicator>
            <RegisterInput label={'대학교'} placeholder={'대학교 이름을 입력해주세요'} storeKey='university' />
            <RegisterInput label={'학과'} placeholder={'학과 이름을 입력해주세요'} storeKey='department' />
            <RegisterInput label={'학번'} placeholder={'학번을 입력해주세요'} storeKey='studentNumber' />
          </>
        );
      case 2:
        return (
          <>
            <RegisterIndicator step={step}>어떤 프로필로 대화할까요?</RegisterIndicator>
            <RegisterProfileImage></RegisterProfileImage>
            <RegisterInput label={'닉네임'} placeholder={'닉네임을 입력해주세요'} storeKey='nickname' />
            <RegisterInput label={'생년월일'} placeholder={'YYMMDD'} storeKey='birth' />
            <RegisterSelectInput label={'성별'} placeholder={'성별을 선택해주세요'} storeKey='gender'></RegisterSelectInput>
          </>
        );
      case 3:
        return (
          <>
            <RegisterIndicator step={step}>휴대폰 인증을 진행해주세요</RegisterIndicator>
            <RegisterMobileCarrierInput
              label={'통신사'}
              placeholder={'통신사를 선택해주세요'}
              storeKey={'mobileCarrier'}
            ></RegisterMobileCarrierInput>
            <div className='flex items-center'>
              <RegisterInput label={'휴대폰 번호'} placeholder={'- 없이 입력해주세요'} storeKey='phone' width='w-[270px]' />
              <div className='flex cursor-pointer active:bg-[#2768FF] w-[100px] h-8 items-center justify-center text-center text-[16px] text-[#ffffff] ml-auto bg-[#2F7DFF] rounded-lg'>
                <p>인증 번호 받기</p>
              </div>
            </div>
            <RegisterInput label={'인증번호'} placeholder={'인증번호를 입력해주세요'} storeKey='verification' />
          </>
        );
      default:
        return null;
    }
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return store.university !== '' && store.department !== '' && store.studentNumber !== '';
      case 2:
        return store.nickname !== '' && store.birth !== '' && store.gender !== '';
      case 3:
        return store.phone !== '' && store.mobileCarrier !== '' && store.verification !== '';
      default:
        return false;
    }
  };

  const handleNextStep = () => {
    if (isStepComplete() && step < 3) {
      setStep((prevStep) => prevStep + 1);
    } else if (isStepComplete() && step === 3) {
      console.log(store);
      /* API 요청 코드 예정입니다 */
      /* API 요청 코드 예정입니다 */
      /* API 요청 코드 예정입니다 */
      /* API 요청 코드 예정입니다 */
    }
  };

  return (
    <>
      <div className='px-4 py-4'>{renderStepContent()}</div>
      <div className='flex'>
        <Button
          isComplete={isStepComplete()}
          onClick={handleNextStep}
          className={`absolute bottom-4 left-0 right-0 ${isStepComplete() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
        >
          {step === 3 ? '완료' : '다음'}
        </Button>
      </div>
    </>
  );
}
