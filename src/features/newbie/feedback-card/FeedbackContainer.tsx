import * as React from 'react';
import { useState } from 'react';

import { SubmittedModal } from './SubmittedModal';
import { FeedbackCard } from './FeedbackCard';

export type RatingRange = '1' | '2' | '3' | '4' | '5' | null;

export function FeedbackContainer() {
  const [selectedRating, setSelectedRating] = React.useState<RatingRange>();
  const [showModal, setShowModal] = useState(false);

  const handleShowHideModal = () => setShowModal((prev) => !prev);

  const handleSelectRating = (selection: RatingRange) => {
    setSelectedRating(selection);
  };

  return showModal ? (
    <SubmittedModal
      hideModal={() => setShowModal(false)}
      handleShowHideModal={handleShowHideModal}
      rating={selectedRating}
    />
  ) : (
    <FeedbackCard
      showModal={() => setShowModal(true)}
      selectedRating={selectedRating}
      handleSelectRating={handleSelectRating}
    />
  );
}
