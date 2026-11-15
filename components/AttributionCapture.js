'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/tracking';

/** Stores UTM parameters from whichever page a visitor lands on, for the demo form. */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
