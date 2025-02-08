// Add interactivity to therapy cards
const therapyCards = document.querySelectorAll('.therapy-card');
const detailsContent = document.getElementById('details-content');

// Define therapy details
const therapyDetails = {
  analytical: {
    title: 'Analytical Music Therapy',
    description: 'A therapist helps a client identify emotional themes in their music.',
    benefits: ['Emotional awareness', 'Self-reflection', 'Healing through music']
  },
  benenzon: {
    title: 'Benenzon Music Therapy',
    description: 'Combines psychoanalysis with music to help people find their "musical sound identity."',
    benefits: ['Self-discovery', 'Emotional expression', 'Personal growth']
  },
  cbmt: {
    title: 'Cognitive Behavioral Music Therapy (CBMT)',
    description: 'Combines cognitive behavioral therapy (CBT) with music to reinforce or modify behaviors.',
    benefits: ['Behavior modification', 'Stress reduction', 'Improved coping skills']
  },
  'nordoff-robbins': {
    title: 'Nordoff-Robbins Music Therapy',
    description: 'Also called creative music therapy, this approach focuses on developing self-expression and communication.',
    benefits: ['Enhanced communication', 'Creative expression', 'Social interaction']
  },
  compositional: {
    title: 'Compositional Music Therapy',
    description: 'A patient works with a therapist to compose music to express their emotions.',
    benefits: ['Emotional release', 'Creative outlet', 'Personalized therapy']
  }
};

// Add click event listeners to therapy cards
therapyCards.forEach(card => {
  card.addEventListener('click', () => {
    const therapyType = card.getAttribute('data-therapy');
    const details = therapyDetails[therapyType];

    // Update details section
    detailsContent.innerHTML = `
      <h3>${details.title}</h3>
      <p>${details.description}</p>
      <h4>Benefits:</h4>
      <ul>
        ${details.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
      </ul>
    `;
  });
});