'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { UpdatesList } from '@/components/sections/UpdatesList';

export default function UpdatesPage() {
  return (
    <PageTransition>
      <UpdatesList />
    </PageTransition>
  );
}

