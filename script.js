// Therapy Details Data
const therapyDetails = {
  analytical: {
    title: 'Analytical Music Therapy',
    description: 'A therapist helps a client identify emotional themes in their music.',
    benefits: ['Emotional awareness', 'Self-reflection', 'Healing through music'],
    music: [
      { raag: 'Bhairav', example: 'Om Namah Shivaya' },
      { raag: 'Yaman', example: 'Pal Pal Hai Bhaari' },
      { raag: 'Marwa', example: 'Piya Baaj Piyaala' },
      { raag: 'Bhimpalasi', example: 'Albela Sajan Aayo Re' },
      { raag: 'Darbari Kanada', example: 'Kaun Gali Gayo Shyam' },
      { raag: 'Malkauns', example: 'Man Tarpat Hari Darshan Ko Aaj' },
      { raag: 'Todi', example: 'Raghupati Raghav Raja Ram' },
      { raag: 'Kafi', example: 'Jhoola Kinne Dala Re' },
      { raag: 'Puriya Dhanashri', example: 'Piya Tora Kaisa Abhiman' },
      { raag: 'Ahir Bhairav', example: 'Allah Tero Naam' }
    ]
  },
  benenzon: {
    title: 'Benenzon Music Therapy',
    description: 'Combines psychoanalysis with music to help people find their "musical sound identity."',
    benefits: ['Self-discovery', 'Emotional expression', 'Personal growth'],
    music: [
      { raag: 'Desh', example: 'Vande Mataram' },
      { raag: 'Khamaj', example: 'Chhupa Lo Yun Dil Mein' },
      { raag: 'Pilu', example: 'Piya Tose Naina Lage Re' },
      { raag: 'Bageshri', example: 'Badi Der Bhai Nandlala' },
      { raag: 'Bhairavi', example: 'Raga Bhairavi Alap' },
      { raag: 'Jaunpuri', example: 'Shyam Teri Bansi Pukare' },
      { raag: 'Shuddh Sarang', example: 'Sur Na Saje' },
      { raag: 'Multani', example: 'Kaise Sukh Soya' },
      { raag: 'Gaud Sarang', example: 'Madhuban Mein Radhika' },
      { raag: 'Chandrakauns', example: 'Raga Chandrakauns Alap' }
    ]
  },
  // Add data for other therapy types similarly...
};

// Add click event listeners to therapy cards
const therapyCards = document.querySelectorAll('.therapy-card');
const detailsContent = document.getElementById('details-content');
const musicContent = document.getElementById('music-content');

therapyCards.forEach(card => {
  card.addEventListener('click', () => {
    const therapyType = card.getAttribute('data-therapy');
    const details = therapyDetails[therapyType];

    // Update therapy details section
    detailsContent.innerHTML = `
      <h3>${details.title}</h3>
      <p>${details.description}</p>
      <h4>Benefits:</h4>
      <ul>
        ${details.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
      </ul>
    `;

    // Update Indian music recommendations section
    musicContent.innerHTML = `
      <h3>Recommended Indian Raagas</h3>
      ${details.music.map(song => `
        <div class="music-card">
          <h4>${song.raag}</h4>
          <p>Example: ${song.example}</p>
        </div>
      `).join('')}
    `;
  });
});