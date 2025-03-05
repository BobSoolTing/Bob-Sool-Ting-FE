import React, { useEffect, useState } from 'react';
import Button from '@/components/shared/Button';
import RegisterIndicator from '@/components/shared/register/RegisterIndicator';
import RegisterInput from '@/components/shared/register/RegisterInput';
import { useRegisterStore } from '@/stores/register-form';
import RegisterProfileImage from '@/components/shared/register/RegisterProfileImage';
import RegisterSelectInput from '@/components/shared/register/RegisterSelectInput';
import RegisterMobileCarrierInput from '@/components/shared/register/RegisterMobileCarrierInput';
import { validateUniversity, validateDepartment, validateStudentNumber, validateNickname, validateBirth } from '@/utils/validations';

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const store = useRegisterStore();

  useEffect(() => {
    setStep(1);
  }, []);

  const validateCurrentStep = () => {
    const stepValidations = {
      1: () => {
        const universityValidation = validateUniversity(store.university);
        const departmentValidation = validateDepartment(store.department);
        const studentNumberValidation = validateStudentNumber(store.studentNumber);

        const validationErrors = [
          !universityValidation.isValid && universityValidation.errorMessage,
          !departmentValidation.isValid && departmentValidation.errorMessage,
          !studentNumberValidation.isValid && studentNumberValidation.errorMessage,
        ].filter(Boolean) as string[];
        return validationErrors.length === 0;
      },
      2: () => {
        const nicknameValidation = validateNickname(store.nickname);
        const birthValidation = validateBirth(store.birth);
        const genderValidation = store.gender !== '';

        const validationErrors = [
          !nicknameValidation.isValid && nicknameValidation.errorMessage,
          !birthValidation.isValid && birthValidation.errorMessage,
          !genderValidation && '성별을 선택해주세요.',
        ].filter(Boolean) as string[];

        setErrors(validationErrors);
        return validationErrors.length === 0;
      },
      3: () => {
        const validationErrors = [
          store.phone === '' && '휴대폰 번호를 입력해주세요.',
          store.mobileCarrier === '' && '통신사를 선택해주세요.',
          store.verification === '' && '인증번호를 입력해주세요.',
        ].filter(Boolean) as string[];

        setErrors(validationErrors);
        return validationErrors.length === 0;
      },
    };

    return stepValidations[step]();
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      if (step < 3) {
        setStep((prevStep) => prevStep + 1);
        setErrors([]);
      } else {
        // API 요청 로직
        console.log(store);
      }
    }
  };

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
            <RegisterInput label={'생년월일'} placeholder={'YYYY-MM-DD'} storeKey='birth' />
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

  return (
    <>
      <div className='px-4 py-4'>
        {errors.length > 0 && (
          <div className='mb-4'>
            {errors.map((error, index) => (
              <p key={index} className='text-red-500 text-sm'>
                {error}
              </p>
            ))}
          </div>
        )}
        {renderStepContent()}
      </div>
      <div className='flex'>
        <Button
          isComplete={errors.length === 0}
          onClick={handleNextStep}
          className={`absolute bottom-4 left-0 right-0 ${errors.length === 0 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
        >
          {step === 3 ? '완료' : '다음'}
        </Button>
      </div>
    </>
  );
}
