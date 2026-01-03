'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { ContactForm } from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactForm />
    </PageTransition>
  );
}

