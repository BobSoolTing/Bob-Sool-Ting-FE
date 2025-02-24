import React, { useState } from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';
import AlertItem from '@/components/shared/AlertItem';
import { IAlert } from '@/types/types';

const initialAlerts: IAlert[] = [
  {
    _id: '1',
    postId: '밥약하실 후배님을 찾습니다',
    content: '안녕하세요! 밥약 함께하실 분을 찾고 있습니다. 편하게 연락 주세요!',
    type: 'Apply',
    createdAt: '25. 04. 30',
  },
  {
    _id: '2',
    postId: '스터디 모집합니다',
    content: 'React와 TypeScript 스터디 멤버를 모집합니다. 함께 공부하실 분 지원 부탁드립니다!',
    type: 'Accept',
    createdAt: '25. 05. 02',
  },
  {
    _id: '3',
    postId: '헬스 친구 구해요',
    content: '주 3회 이상 운동하실 분 찾습니다! 서로 동기 부여하면서 함께 운동해요!',
    type: 'Like',
    createdAt: '25. 05. 05',
  },
  {
    _id: '4',
    postId: '헬스 친구 구해요',
    content: '주 3회 이상 운동하실 분 찾습니다! 서로 동기 부여하면서 함께 운동해요!',
    type: 'Like',
    createdAt: '25. 05. 05',
  },
  {
    _id: '5',
    postId: '헬스 친구 구해요',
    content: '주 3회 이상 운동하실 분 찾습니다! 서로 동기 부여하면서 함께 운동해요!',
    type: 'Like',
    createdAt: '25. 05. 05',
  },
  {
    _id: '6',
    postId: '헬스 친구 구해요',
    content: '주 3회 이상 운동하실 분 찾습니다! 서로 동기 부여하면서 함께 운동해요!',
    type: 'Like',
    createdAt: '25. 05. 05',
  },
  {
    _id: '7',
    postId: '헬스 친구 구해요',
    content: '주 3회 이상 운동하실 분 찾습니다! 서로 동기 부여하면서 함께 운동해요!',
    type: 'Like',
    createdAt: '25. 05. 05',
  },
];

export default function AlertPage() {
  const [alerts, setAlerts] = useState<IAlert[]>(initialAlerts);
  const [activeAlertId, setActiveAlertId] = useState<string | null>(null); // 현재 열려 있는 알림 ID 관리

  // 삭제 버튼 토글 (슬라이드 영역 열기/닫기)
  const handleDeleteOpen = (id: string) => {
    setActiveAlertId((prev) => (prev === id ? null : id));
  };

  // 알림 삭제
  const handleDelete = (id: string) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert._id !== id));
  };

  return (
    <div>
      {alerts.map((alert) => (
        <AlertItem
          key={alert._id}
          alert={alert}
          isSlide={activeAlertId === alert._id}
          onDeleteOpen={() => handleDeleteOpen(alert._id)}
          onDelete={() => handleDelete(alert._id)}
        />
      ))}
    </div>
  );
}

AlertPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>
        <div>알림</div>
      </Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
