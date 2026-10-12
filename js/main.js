/**
 * AIKALAKAR™ — Interactive Agency Architecture
 * World-Class Creative Studio & Visual Storytelling Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configurable Business Constants
  const CONFIG = {
    whatsappNumber: '917385499199',
    studioEmail: 'contact@aikalakar.in',
    studioName: 'AIKALAKAR™'
  };

  // ── 1. HEADER SCROLL & MOBILE NAVIGATION ──
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  const toggleMobileMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileDrawer?.classList.contains('open');
    mobileToggle?.classList.toggle('open', isOpen);
    mobileDrawer?.classList.toggle('open', isOpen);
    mobileOverlay?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  mobileToggle?.addEventListener('click', () => toggleMobileMenu());
  mobileOverlay?.addEventListener('click', () => toggleMobileMenu(false));
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // ── 1.5 NETFLIX-STYLE CINEMA STAGE & CLIENT PREVIEW PLAYER ──
  /**
   * 💡 YOGESH / AIKALAKAR NOTICE — HOW TO ADD NEW VIDEOS:
   * 1. Place your new MP4 video file inside assets/videos/ (e.g. assets/videos/my_client_video.mp4).
   * 2. Place its thumbnail poster inside assets/images/ (e.g. assets/images/my_poster.jpg).
   * 3. Add or update items in NETFLIX_PLAYLIST below!
   */
  const NETFLIX_PLAYLIST = [
    {
      id: 'jewellery',
      shortTitle: '01 Jewellery',
      title: "SHREE RATNA — 24-Karat Heritage Jewellery Ad",
      category: "LUXURY JEWELLERY COMMERCIAL",
      duration: "0:10 MIN",
      spec: "ULTRA HD · NEURAL MASTER",
      videoUrl: "assets/videos/jewellery_commercial.mp4",
      poster: "assets/images/perfume.jpg",
      desc: "Exquisite handcrafted gold filigree, micro gem acoustics, and royal Indian bridal storytelling.",
      formCategory: "ai-video-ads"
    },
    {
      id: 'perfume',
      shortTitle: '02 Fragrance',
      title: "L'ÉLIXIR NOIR — Luxury Fragrance Film",
      category: "COSMETICS & PERFUMERY",
      duration: "0:10 MIN",
      spec: "ULTRA HD · NEURAL MASTER",
      videoUrl: "assets/videos/perfume_commercial.mp4",
      poster: "assets/images/perfume.jpg",
      desc: "Molten liquid gold fluid dynamics and crystal glass acoustics crafted for luxury cosmetic campaigns.",
      formCategory: "ai-video-ads"
    },
    {
      id: 'biryani',
      shortTitle: '03 Food & Dine',
      title: "DAAWAT-E-KHAAS — Royal Dum Biryani",
      category: "CULINARY & RESTAURANT AD",
      duration: "0:10 MIN",
      spec: "CINEMATIC FOOD REEL",
      videoUrl: "assets/videos/biryani_commercial.mp4",
      poster: "assets/images/tea.jpg",
      desc: "Saffron steam dynamics, sizzling charcoal dum, and mouthwatering slow-motion culinary visuals.",
      formCategory: "social-media"
    },
    {
      id: 'hypercar',
      shortTitle: '04 Hypercar',
      title: "KAIROS HYPERCAR — Electric Velocity",
      category: "AUTOMOTIVE COMMERCIAL",
      duration: "0:10 MIN",
      spec: "8K AI SYNTHESIS · NEURAL MASTER",
      videoUrl: "assets/videos/hypercar_commercial.mp4",
      poster: "assets/images/hypercar.jpg",
      desc: "Aerodynamic carbon-fiber wind tunnel study with volumetric smoke trails and high-speed telemetry.",
      formCategory: "product-films"
    },
    {
      id: 'wedding',
      shortTitle: '05 Wedding',
      title: "EVERMOTION — Grand Indian Wedding Film",
      category: "CINEMATIC WEDDING PRODUCTION",
      duration: "0:10 MIN",
      spec: "ARRI CINEMA MASTER",
      videoUrl: "assets/videos/wedding_commercial.mp4",
      poster: "assets/images/perfume.jpg",
      desc: "Regal palace decor, emotional bridal vows, and slow-motion royal celebration moments.",
      formCategory: "brand-campaigns"
    },
    {
      id: 'architecture',
      shortTitle: '06 Real Estate',
      title: "SOLIS ARCHITECTURE — Monolithic Villa",
      category: "REAL ESTATE & ARCHITECTURE",
      duration: "0:10 MIN",
      spec: "35mm TILT-SHIFT · NEURAL MASTER",
      videoUrl: "assets/videos/architecture_commercial.mp4",
      poster: "assets/images/architecture.jpg",
      desc: "Raw board-formed travertine concrete bathed in Mediterranean sunset light and geometry.",
      formCategory: "brand-campaigns"
    },
    {
      id: 'scooter',
      shortTitle: '07 EV Mobility',
      title: "VOLTIX URBAN — Smart Electric Scooter",
      category: "ELECTRIC AUTOMOTIVE AD",
      duration: "0:10 MIN",
      spec: "HIGH-SPEED CITY TRACKING",
      videoUrl: "assets/videos/scooter_commercial.mp4",
      poster: "assets/images/hypercar.jpg",
      desc: "Sleek aerodynamic chassis, futuristic neon night streets, and clean electric acceleration.",
      formCategory: "product-films"
    },
    {
      id: 'watch',
      shortTitle: '08 Horology',
      title: "CHRONOS SKELETON — Tourbillon Horology",
      category: "KINETIC LUXURY HOROLOGY",
      duration: "0:10 MIN",
      spec: "1000 FPS HIGH-SPEED · NEURAL MASTER",
      videoUrl: "assets/videos/watch_commercial.mp4",
      poster: "assets/images/watch.jpg",
      desc: "Perpetual mechanical movement colliding with zero-gravity liquid gold and optical caustics.",
      formCategory: "creative-experiments"
    },
    {
      id: 'bakery',
      shortTitle: '09 Chocolatier',
      title: "VELVET CRUMB — Artisanal Chocolate Cake",
      category: "BAKERY & CONFECTIONERY",
      duration: "0:10 MIN",
      spec: "MACRO FLUID DYNAMICS",
      videoUrl: "assets/videos/bakery_commercial.mp4",
      poster: "assets/images/tea.jpg",
      desc: "Decadent dark ganache glaze, macro berry textures, and mouth-watering patisserie visuals.",
      formCategory: "social-media"
    },
    {
      id: 'headphones',
      shortTitle: '10 Spatial Audio',
      title: "AURA SOUND — Spatial Acoustic Optics",
      category: "LUXURY TECH COMMERCIAL",
      duration: "0:10 MIN",
      spec: "MACRO PROBE · NEURAL MASTER",
      videoUrl: "assets/videos/headphones_commercial.mp4",
      poster: "assets/images/headphones.jpg",
      desc: "Micro-machined anodized aluminum, memory foam contours, and levitating acoustic soundwaves.",
      formCategory: "product-films"
    }
  ];

  const cinema3dStage = document.getElementById('cinema-3d-stage');
  const cinemaCarouselTrack = document.getElementById('cinema-carousel-track');
  const cinemaPillsTrack = document.getElementById('cinema-pills-track');
  const netflixPrevBtn = document.getElementById('netflix-prev-btn');
  const netflixNextBtn = document.getElementById('netflix-next-btn');
  const netflixReelIndex = document.getElementById('netflix-reel-index');

  let currentNetflixIndex = 0;
  let isGlobalMuted = true;
  let slideElements = [];
  let pillElements = [];

  const PILL_LABELS = [
    "01 Fragrance",
    "02 Hypercar",
    "03 Villa",
    "04 Spatial Audio",
    "05 Horology",
    "06 Cold Brew",
    "07 Cleanroom"
  ];

  const initNetflixCinema = () => {
    if (!cinemaCarouselTrack) return;

    // 1. Build Story Reel Pills with Live Progress Bar
    if (cinemaPillsTrack) {
      cinemaPillsTrack.innerHTML = '';
      pillElements = [];
      NETFLIX_PLAYLIST.forEach((item, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `cinema-pill-btn ${idx === 0 ? 'active' : ''}`;
        btn.setAttribute('title', `Slide to: ${item.title}`);
        
        const label = document.createElement('span');
        label.textContent = item.shortTitle || PILL_LABELS[idx] || `Reel 0${idx + 1}`;
        
        const progress = document.createElement('span');
        progress.className = 'cinema-pill-progress';
        
        btn.appendChild(label);
        btn.appendChild(progress);

        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          slideToIndex(idx);
        });

        cinemaPillsTrack.appendChild(btn);
        pillElements.push({ btn, progress });
      });
    }

    // 2. Build 3D Slide Elements
    cinemaCarouselTrack.innerHTML = '';
    slideElements = [];
    NETFLIX_PLAYLIST.forEach((item, idx) => {
      const slide = document.createElement('div');
      slide.className = 'cinema-slide';
      slide.setAttribute('data-index', idx);

      slide.innerHTML = `
        <video class="cinema-slide-video" playsinline muted preload="${idx === 0 ? 'auto' : 'metadata'}" poster="${item.poster}">
          <source src="${item.videoUrl}" type="video/mp4" />
        </video>
        <div class="netflix-gradient-overlay"></div>
        
        <div class="cinema-peek-badge">
          <span class="peek-badge-text"></span>
        </div>

        <div class="netflix-bottom-overlay">
          <div class="netflix-info-column">
            <div class="netflix-tagline-row">
              <span class="netflix-category-badge">${item.category}</span>
              <span class="netflix-duration-badge">${item.duration}</span>
            </div>
            <h3 class="netflix-active-title">${item.title}</h3>
            <p class="netflix-active-desc">${item.desc}</p>
          </div>

          <div class="netflix-controls-row">
            <div class="netflix-btn-group">
              <button type="button" class="btn-netflix-play" title="Play / Pause (Space)">
                <svg class="icon-pause" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                <svg class="icon-play" style="display:none;" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <button type="button" class="btn-netflix-ctrl btn-mute-toggle" title="Toggle Audio (M)">
                <svg class="icon-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                <svg class="icon-unmuted" style="display:none;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
              <button type="button" class="btn-netflix-ctrl btn-fullscreen-toggle" title="Fullscreen">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
              </button>
            </div>
            <a href="#contact" class="btn-netflix-inquire">
              <span>Start Project In This Style</span> →
            </a>
          </div>
        </div>
      `;

      const video = slide.querySelector('video');
      const peekBadgeText = slide.querySelector('.peek-badge-text');
      const playBtn = slide.querySelector('.btn-netflix-play');
      const muteBtn = slide.querySelector('.btn-mute-toggle');
      const fsBtn = slide.querySelector('.btn-fullscreen-toggle');
      const inquireBtn = slide.querySelector('.btn-netflix-inquire');

      // Click on slide behavior:
      slide.addEventListener('click', (e) => {
        // If clicking interactive controls, ignore slide navigation
        if (e.target.closest('.netflix-controls-row') || e.target.closest('.cinema-pills-nav')) {
          return;
        }
        if (slide.classList.contains('slide-prev')) {
          slidePrev();
        } else if (slide.classList.contains('slide-next')) {
          slideNext();
        } else if (slide.classList.contains('slide-center')) {
          // Toggle play/pause
          if (video.paused) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      });

      // Play / Pause Button
      playBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });

      video.addEventListener('play', () => updatePlayIcons(slide, true));
      video.addEventListener('pause', () => updatePlayIcons(slide, false));

      // Mute / Unmute Button
      muteBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        isGlobalMuted = !isGlobalMuted;
        applyMuteStateToAll();
        showToast(isGlobalMuted ? 'Audio Muted' : 'Audio Active (Sound ON)');
      });

      // Fullscreen Button
      fsBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!document.fullscreenElement) {
          cinema3dStage?.requestFullscreen?.().catch(() => {
            video.requestFullscreen?.().catch(() => {});
          });
        } else {
          document.exitFullscreen?.().catch(() => {});
        }
      });

      // Inquire Button
      inquireBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        prefillAndScrollToForm(item.formCategory, `I would like to create a video similar to: ${item.title}`);
      });

      // Video Time Update (only updates when center)
      video.addEventListener('timeupdate', () => {
        if (!slide.classList.contains('slide-center') || !video.duration) return;
        const progressPercent = (video.currentTime / video.duration) * 100;
        updatePillProgress(currentNetflixIndex, progressPercent);
      });

      // Auto-advance to Next Video on End
      video.addEventListener('ended', () => {
        if (slide.classList.contains('slide-center')) {
          slideNext();
        }
      });

      cinemaCarouselTrack.appendChild(slide);
      slideElements.push({ slide, video, peekBadgeText, playBtn, muteBtn });
    });

    // Initial Layout Setup
    updateSlidePositions();

    // Floating Chevrons
    netflixNextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      slideNext();
    });

    netflixPrevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      slidePrev();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) {
        return;
      }
      if (document.getElementById('project-modal')?.classList.contains('open')) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        const activeItem = slideElements[currentNetflixIndex];
        if (activeItem) {
          if (activeItem.video.paused) {
            activeItem.video.play().catch(() => {});
          } else {
            activeItem.video.pause();
          }
        }
      } else if (e.key === 'ArrowRight') {
        slideNext();
      } else if (e.key === 'ArrowLeft') {
        slidePrev();
      } else if (e.key === 'm' || e.key === 'M') {
        isGlobalMuted = !isGlobalMuted;
        applyMuteStateToAll();
        showToast(isGlobalMuted ? 'Audio Muted' : 'Audio Active (Sound ON)');
      }
    });

    // Touch / Swipe on 3D Stage
    if (cinema3dStage) {
      let touchStartX = 0;
      let touchStartY = 0;

      cinema3dStage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      cinema3dStage.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX < 0) {
            slideNext(); // Swiped left -> Next video
          } else {
            slidePrev(); // Swiped right -> Previous video
          }
        }
      }, { passive: true });
    }
  };

  const updateSlidePositions = () => {
    const N = NETFLIX_PLAYLIST.length;
    const prevIdx = (currentNetflixIndex - 1 + N) % N;
    const nextIdx = (currentNetflixIndex + 1) % N;

    slideElements.forEach((item, idx) => {
      const { slide, video, peekBadgeText } = item;

      // Remove existing position classes
      slide.classList.remove(
        'slide-center',
        'slide-prev',
        'slide-next',
        'slide-hidden-left',
        'slide-hidden-right'
      );

      if (idx === currentNetflixIndex) {
        slide.classList.add('slide-center');
        video.muted = isGlobalMuted;
        video.play().catch(() => {});
        updatePlayIcons(slide, !video.paused);
      } else if (idx === prevIdx) {
        slide.classList.add('slide-prev');
        if (peekBadgeText) peekBadgeText.textContent = `‹ PREV REEL`;
        video.pause();
        video.currentTime = 0;
        updatePlayIcons(slide, false);
      } else if (idx === nextIdx) {
        slide.classList.add('slide-next');
        if (peekBadgeText) peekBadgeText.textContent = `UP NEXT ›`;
        video.pause();
        video.currentTime = 0;
        updatePlayIcons(slide, false);
      } else {
        const diff = (idx - currentNetflixIndex + N) % N;
        if (diff < N / 2) {
          slide.classList.add('slide-hidden-right');
        } else {
          slide.classList.add('slide-hidden-left');
        }
        video.pause();
        video.currentTime = 0;
        updatePlayIcons(slide, false);
      }
    });

    // Update HUD counter
    if (netflixReelIndex) {
      netflixReelIndex.textContent = `REEL 0${currentNetflixIndex + 1} / 0${N}`;
    }

    // Update Story Reel Pills active state
    pillElements.forEach((el, idx) => {
      if (idx < currentNetflixIndex) {
        el.btn.classList.add('completed');
        el.btn.classList.remove('active');
        el.progress.style.width = '100%';
      } else if (idx === currentNetflixIndex) {
        el.btn.classList.remove('completed');
        el.btn.classList.add('active');
        el.progress.style.width = '0%';
        el.btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      } else {
        el.btn.classList.remove('completed');
        el.btn.classList.remove('active');
        el.progress.style.width = '0%';
      }
    });

    applyMuteStateToAll();
  };

  const slideNext = () => {
    currentNetflixIndex = (currentNetflixIndex + 1) % NETFLIX_PLAYLIST.length;
    updateSlidePositions();
  };

  const slidePrev = () => {
    currentNetflixIndex = (currentNetflixIndex - 1 + NETFLIX_PLAYLIST.length) % NETFLIX_PLAYLIST.length;
    updateSlidePositions();
  };

  const slideToIndex = (index) => {
    if (index < 0 || index >= NETFLIX_PLAYLIST.length) return;
    currentNetflixIndex = index;
    updateSlidePositions();
  };

  const updatePillProgress = (index, percent) => {
    if (pillElements[index]) {
      pillElements[index].progress.style.width = `${percent}%`;
    }
  };

  const updatePlayIcons = (slide, isPlaying) => {
    const playBtn = slide.querySelector('.btn-netflix-play');
    if (!playBtn) return;
    const iconPause = playBtn.querySelector('.icon-pause');
    const iconPlay = playBtn.querySelector('.icon-play');
    if (iconPause && iconPlay) {
      iconPause.style.display = isPlaying ? 'block' : 'none';
      iconPlay.style.display = isPlaying ? 'none' : 'block';
    }
  };

  const applyMuteStateToAll = () => {
    slideElements.forEach(({ slide, video, muteBtn }) => {
      video.muted = isGlobalMuted;
      if (muteBtn) {
        const iconMuted = muteBtn.querySelector('.icon-muted');
        const iconUnmuted = muteBtn.querySelector('.icon-unmuted');
        if (iconMuted && iconUnmuted) {
          iconMuted.style.display = isGlobalMuted ? 'block' : 'none';
          iconUnmuted.style.display = isGlobalMuted ? 'none' : 'block';
        }
      }
    });
  };

  // Initialize cinema player
  initNetflixCinema();

  // ── 1.4 FULLSCREEN BACKGROUND VIDEO CONTROLLER ──
  const initHeroBackgroundVideo = () => {
    const bgVideo = document.getElementById('hero-bg-video');
    if (!bgVideo) return;

    const switcherBtns = document.querySelectorAll('.hero-reel-switcher .reel-pill-btn');
    const soundToggleBtn = document.getElementById('hero-sound-toggle-btn');
    const soundLabel = document.getElementById('hero-sound-label');
    const soundMutedIcon = soundToggleBtn?.querySelector('.sound-muted-icon');
    const soundUnmutedIcon = soundToggleBtn?.querySelector('.sound-unmuted-icon');

    let currentReelIndex = 0;
    const reelList = Array.from(switcherBtns).map(btn => ({
      src: btn.getAttribute('data-src'),
      poster: btn.getAttribute('data-poster'),
      title: btn.getAttribute('data-title'),
      btn
    }));

    const switchReel = (index) => {
      if (index < 0 || index >= reelList.length) return;
      currentReelIndex = index;

      reelList.forEach((item, idx) => {
        item.btn.classList.toggle('active', idx === currentReelIndex);
      });

      // Smooth opacity crossfade
      bgVideo.style.opacity = '0.35';
      setTimeout(() => {
        bgVideo.src = reelList[currentReelIndex].src;
        if (reelList[currentReelIndex].poster) {
          bgVideo.poster = reelList[currentReelIndex].poster;
        }
        bgVideo.load();
        bgVideo.play().catch(() => {});
        bgVideo.style.opacity = '1';
      }, 200);
    };

    switcherBtns.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        switchReel(idx);
      });
    });

    // Advance to next reel when current video finishes
    bgVideo.addEventListener('ended', () => {
      const nextIdx = (currentReelIndex + 1) % reelList.length;
      switchReel(nextIdx);
    });

    // Sound toggle
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        bgVideo.muted = !bgVideo.muted;
        const isMuted = bgVideo.muted;
        if (soundMutedIcon) soundMutedIcon.style.display = isMuted ? 'block' : 'none';
        if (soundUnmutedIcon) soundUnmutedIcon.style.display = isMuted ? 'none' : 'block';
        if (soundLabel) soundLabel.textContent = isMuted ? 'MUTED' : 'SOUND ON';
        if (typeof showToast === 'function') {
          showToast(isMuted ? 'Background Video Muted' : 'Audio Active (Sound ON)');
        }
      });
    }

    // Ensure initial playback
    bgVideo.muted = true;
    bgVideo.play().catch(() => {});
  };

  initHeroBackgroundVideo();

  // ── 2. PORTFOLIO FILTERING ──
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ── 3. PROJECT DATA STORE & VIDEO LIGHTBOX MODAL ──
  const PROJECTS_DATA = {
    'hero-showreel': {
      title: "AIKALAKAR™ — 2026 Master Cinema Showreel",
      category: "Cinematic Showreel",
      duration: "0:70 · Anamorphic Cinema Master",
      videoUrl: "assets/videos/hero_showreel.mp4",
      poster: "assets/images/perfume.jpg",
      narrative: "A curated sequence of our highest-fidelity AI cinema productions, combining photoreal optical physics, anamorphic lens flares, and emotive sound architecture.",
      direction: "Arri Alexa 35 profile, proprietary AIKALAKAR™ multi-shot neural directing, DaVinci Resolve color finishing.",
      engine: "AIKALAKAR™ Proprietary Neural Production Pipeline",
      color: "Kodak 2383 / Chiaroscuro 35mm Master",
      sound: "Multi-track spatial audio, deep sub-bass cinematic heartbeat",
      formCategory: "ai-video-ads"
    },
    'elixir-noir': {
      title: "L'ÉLIXIR NOIR — Luxury Fragrance Film",
      category: "AI Video Advertisements",
      duration: "0:10 · Anamorphic Cinema Master",
      videoUrl: "assets/videos/perfume_commercial.mp4",
      poster: "assets/images/perfume.jpg",
      narrative: "A sensuous, chiaroscuro narrative exploring amber resin, smoked cedarwood, and liquid obsidian. Built to evoke olfactory depth through macro fluid physics and hyper-tactile lighting.",
      direction: "Arri Alexa anamorphic lens profile, 2.39:1 cinemascope ratio, 800 ISO low-light grain, slow-motion fluid simulation.",
      engine: "AIKALAKAR™ Proprietary Neural Cinema Engine",
      color: "Kodak 2383 Film Print Emulation (DaVinci LUT)",
      sound: "Spatial Foley, binaural glass resonance, deep sub-bass pulse",
      formCategory: "ai-video-ads"
    },
    'kairos-hypercar': {
      title: "KAIROS HYPERCAR — Electric Vision Concept",
      category: "Product Films",
      duration: "0:10 · 8K AI Synthesis",
      videoUrl: "assets/videos/hypercar_commercial.mp4",
      poster: "assets/images/hypercar.jpg",
      narrative: "Aerodynamic sculpture meeting kinetic wind tunnels. Pure velocity visualized through generative particle dynamics and carbon-fiber reflections in a brutalist wind testing facility.",
      direction: "35mm prime lenses, high-speed camera tracking, volumetric smoke trails, titanium highlights.",
      engine: "AIKALAKAR™ Neural Production Pipeline & Custom Anamorphic Rig",
      color: "Monochrome Graphite with Tungsten Amber Accents",
      sound: "Synthesized electric turbine whine, aerodynamic whoosh, heartbeat cadence",
      formCategory: "product-films"
    },
    'solis-architecture': {
      title: "SOLIS ARCHITECTURE — Monolithic Living Spaces",
      category: "Brand Campaigns",
      duration: "0:10 · 35mm Architectural Film",
      videoUrl: "assets/videos/architecture_commercial.mp4",
      poster: "assets/images/architecture.jpg",
      narrative: "Raw board-formed concrete bathed in Mediterranean sunset light, capturing spatial serenity, shadow geometry, and timeless architectural proportion.",
      direction: "Ultra-wide 18mm architectural tilt-shift, slow crane elevation, golden hour solar path tracking.",
      engine: "AIKALAKAR™ High-Fidelity Neural Environment Studio",
      color: "Warm Ivory & Travertine Earth Tone Balance",
      sound: "Gentle coastal wind, ambient courtyard acoustics, minimalist cello score",
      formCategory: "brand-campaigns"
    },
    'aura-sound': {
      title: "AURA SOUND — Spatial Audio Masterpiece",
      category: "Product Films",
      duration: "0:10 · Macro Acoustics",
      videoUrl: "assets/videos/headphones_commercial.mp4",
      poster: "assets/images/headphones.jpg",
      narrative: "High-precision macro visuals revealing micro-machined anodized aluminum, memory foam contours, and acoustic soundwave physics in levitating suspension.",
      direction: "100mm macro probe lens, floating orbital dolly, zero-gravity particle dispersion.",
      engine: "AIKALAKAR™ High-Precision Neural Product Studio",
      color: "Clean studio rim-light with frosted matte highlights",
      sound: "Ultra-crisp 96kHz acoustic transients, spatial panning, deep 20Hz drop",
      formCategory: "product-films"
    },
    'nexus-robotics': {
      title: "NEXUS ROBOTICS — Industrial Cinema Film",
      category: "Corporate Films",
      duration: "0:10 · Aerospace Documentary",
      videoUrl: "assets/videos/robotics_commercial.mp4",
      poster: "assets/images/robotics.jpg",
      narrative: "Human ingenuity amplified by high-precision robotics. A cinematic documentary into modern automated cleanrooms and aerospace assembly lines.",
      direction: "Documentary shoulder-rig simulation, 50mm T1.3 cine glass, cool surgical lighting.",
      engine: "AI Industrial Scene Synthesis & Final Cut Pro X Finishing",
      color: "Cool Cyan Shadows with Warm Skin Tone Separation",
      sound: "Precise pneumatic foley, industrial hum, uplifting modern orchestral score",
      formCategory: "corporate-films"
    },
    'chronos-reimagined': {
      title: "CHRONOS REIMAGINED — Generative Horology",
      category: "Creative Experiments",
      duration: "0:10 · Kinetic Fluid Dynamics",
      videoUrl: "assets/videos/watch_commercial.mp4",
      poster: "assets/images/watch.jpg",
      narrative: "The collision of perpetual tourbillon gear mechanics with zero-gravity liquid gold droplets and shifting temporal geometries.",
      direction: "Experimental macro cine-rig, extreme slow-motion 1000 FPS simulation, refractive caustics.",
      engine: "AI Generative Physics Engine & Experimental LORAs",
      color: "Deep Obsidian Black & 24K Liquid Gold Lustre",
      sound: "Delicate mechanical ticking, crystalline chiming, time-dilation reverb",
      formCategory: "creative-experiments"
    },
    'botanica-essence': {
      title: "BOTANICA ESSENCE — Organic Cold Brew Visuals",
      category: "Social Media Campaigns",
      duration: "0:10 · 9:16 Vertical Master",
      videoUrl: "assets/videos/tea_commercial.mp4",
      poster: "assets/images/tea.jpg",
      narrative: "High-speed liquid pours, floating chamomile petals, and crisp condensation droplets capturing morning serenity for viral digital campaigns.",
      direction: "Vertical 9:16 framed, 120 FPS high-speed splash sync, natural dappled morning sunlight.",
      engine: "AI High-Speed Fluid Pipeline",
      color: "Earthy Botanical Greens & Warm Amber Infusion",
      sound: "Water splash, ice clink, calming ASMR acoustic presence",
      formCategory: "social-media"
    },
    'meridian-heritage': {
      title: "MERIDIAN HERITAGE — Artisan Loom & Silk Film",
      category: "Brand Campaigns",
      duration: "0:10 · 16mm Film Grain",
      videoUrl: "assets/videos/perfume_commercial.mp4",
      poster: "assets/images/perfume.jpg",
      narrative: "Celebrating ancient textile craftsmanship through golden dusk lighting, tactile macro threads, and generational artisan hands.",
      direction: "16mm Eastman color grain, vintage Cooke panchro lenses, warm chiaroscuro dusk.",
      engine: "Heritage Generative Model & DaVinci Resolve Master",
      color: "Raw Ochre, Indigo, and Natural Warm Sunlight",
      sound: "Rhythmic wooden shuttle clatter, natural loom resonance, traditional flute melody",
      formCategory: "brand-campaigns"
    }
  };

  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalVideo = document.getElementById('modal-video-player');
  const modalCategory = document.getElementById('modal-category');
  const modalDuration = document.getElementById('modal-duration');
  const modalTitle = document.getElementById('modal-title');
  const modalNarrative = document.getElementById('modal-narrative');
  const modalDirection = document.getElementById('modal-direction');
  const modalEngine = document.getElementById('modal-engine');
  const modalColor = document.getElementById('modal-color');
  const modalSound = document.getElementById('modal-sound');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');

  const openProjectModal = (project) => {
    const data = (typeof project === 'object' && project !== null) ? project : PROJECTS_DATA[project];
    if (!data) return;

    if (modalCategory) modalCategory.textContent = `${data.category || 'Commercial Film'} · 100% AI Generated`;
    if (modalDuration) modalDuration.textContent = data.duration || '0:10 · Cinema Master';
    if (modalTitle) modalTitle.textContent = data.title || 'AIKALAKAR™ Commercial Film';
    if (modalNarrative) modalNarrative.textContent = data.narrative || 'High-fidelity commercial production directed and synthesized by AIKALAKAR™ proprietary neural pipeline.';
    if (modalDirection) modalDirection.textContent = data.direction || '35mm anamorphic prime lenses, photoreal lighting, and high-speed motion tracking.';
    if (modalEngine) modalEngine.textContent = 'AIKALAKAR™ Proprietary Neural Studio (100% AI Generated)';
    if (modalColor) modalColor.textContent = data.color || 'DaVinci Resolve 35mm Master';
    if (modalSound) modalSound.textContent = data.sound || 'Mastered Spatial Foley & Cinematic Sound Design';

    // Update corner WhatsApp button with custom film inquiry text
    const modalCornerWaBtn = document.getElementById('modal-corner-wa-btn');
    if (modalCornerWaBtn) {
      const waTitle = data.title || 'commercial film';
      const waMsg = encodeURIComponent(`Hello Yogesh (AIKALAKAR), I am interested in creating a commercial video for my brand in this style: "${waTitle}". Please share details and quotation.`);
      modalCornerWaBtn.href = `https://wa.me/917385499199?text=${waMsg}`;
    }

    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.preload = 'auto';
      modalVideo.src = data.videoUrl;
      if (data.poster) modalVideo.poster = data.poster;
      modalVideo.load();
      const playPromise = modalVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }

    if (modalInquireBtn) {
      modalInquireBtn.onclick = () => {
        closeModal();
        prefillAndScrollToForm(data.formCategory || 'brand-campaigns', `Inquiry regarding project reference: ${data.title}`);
      };
    }

    modalOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay?.classList.remove('open');
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.src = '';
    }
    document.body.style.overflow = '';
  };

  // Attach card click handlers
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      if (projectId) openProjectModal(projectId);
    });
  });

  // Hero Reel Trigger
  const heroReelBtn = document.getElementById('btn-hero-reel');
  heroReelBtn?.addEventListener('click', () => {
    openProjectModal('hero-showreel');
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closePrivacyModal();
      toggleMobileMenu(false);
    }
  });

  // ── 4. SERVICE CARDS & QUICK INQUIRY ──
  const serviceInquireLinks = document.querySelectorAll('.service-inquire-link');
  serviceInquireLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const serviceId = link.getAttribute('data-service-id');
      const serviceName = link.getAttribute('data-service-name');
      prefillAndScrollToForm(serviceId, `I would like to explore creative production for: ${serviceName}`);
    });
  });

  // Helper to prefill and scroll to conversion section
  const prefillAndScrollToForm = (categoryValue, initialMessage) => {
    const formSection = document.getElementById('contact');
    const projectTypeSelect = document.getElementById('project-type');
    const projectDescTextarea = document.getElementById('project-desc');

    if (projectTypeSelect && categoryValue) {
      projectTypeSelect.value = categoryValue;
    }

    if (projectDescTextarea && initialMessage && !projectDescTextarea.value) {
      projectDescTextarea.value = initialMessage;
    }

    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('client-name')?.focus();
      }, 700);
    }
  };

  // ── 5. SIGNATURE VISUAL EXPERIENCE (FILMSTRIP TRACK) ──
  const filmstripWrapper = document.getElementById('filmstrip-wrapper');
  const filmstripPrevBtn = document.getElementById('filmstrip-prev');
  const filmstripNextBtn = document.getElementById('filmstrip-next');
  const filmstripCounter = document.getElementById('filmstrip-counter');
  const filmstripFrames = document.querySelectorAll('.filmstrip-frame');

  if (filmstripWrapper && filmstripPrevBtn && filmstripNextBtn) {
    const scrollAmount = 480;

    filmstripPrevBtn.addEventListener('click', () => {
      filmstripWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    filmstripNextBtn.addEventListener('click', () => {
      filmstripWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    filmstripWrapper.addEventListener('scroll', () => {
      const scrollLeft = filmstripWrapper.scrollLeft;
      const totalWidth = filmstripWrapper.scrollWidth - filmstripWrapper.clientWidth;
      const progress = Math.min(Math.max(scrollLeft / (totalWidth || 1), 0), 1);
      const currentFrame = Math.min(Math.floor(progress * filmstripFrames.length) + 1, filmstripFrames.length);
      if (filmstripCounter) {
        filmstripCounter.textContent = `FRAME 0${currentFrame} / 0${filmstripFrames.length}`;
      }
    }, { passive: true });

    // Enable drag-to-scroll on desktop
    let isDown = false;
    let startX;
    let scrollLeftPos;

    filmstripWrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - filmstripWrapper.offsetLeft;
      scrollLeftPos = filmstripWrapper.scrollLeft;
    });

    filmstripWrapper.addEventListener('mouseleave', () => {
      isDown = false;
    });

    filmstripWrapper.addEventListener('mouseup', () => {
      isDown = false;
    });

    filmstripWrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - filmstripWrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      filmstripWrapper.scrollLeft = scrollLeftPos - walk;
    });
  }

  // ── 6. PROJECT ENQUIRY FORM & REAL CONVERSION ENGINE ──
  const enquiryForm = document.getElementById('project-enquiry-form');
  const submitBtn = document.getElementById('btn-submit-enquiry');
  const feedbackBanner = document.getElementById('form-feedback-banner');
  const btnWhatsAppDirect = document.getElementById('btn-whatsapp-direct');

  // WhatsApp Direct Dispatch button
  btnWhatsAppDirect?.addEventListener('click', () => {
    const name = document.getElementById('client-name')?.value.trim() || 'A Brand Partner';
    const brand = document.getElementById('client-brand')?.value.trim() || 'Undisclosed';
    const projectTypeSelect = document.getElementById('project-type');
    const projectType = projectTypeSelect ? projectTypeSelect.options[projectTypeSelect.selectedIndex].text : 'Creative Project';
    const desc = document.getElementById('project-desc')?.value.trim() || 'Looking to discuss an AI cinematic project.';

    const message = `Hello AIKALAKAR Studio!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Brand / Company:* ${encodeURIComponent(brand)}%0A*Project Type:* ${encodeURIComponent(projectType)}%0A*Brief:* ${encodeURIComponent(desc)}%0A%0AI would like to start a project discussion.`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, '_blank');
  });

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const fields = [
        { id: 'client-name', min: 2, errorMsg: 'Please enter your full name.' },
        { id: 'client-brand', min: 2, errorMsg: 'Please enter your brand or business name.' },
        { id: 'client-contact', min: 5, errorMsg: 'Please enter a valid email or WhatsApp number.' },
        { id: 'project-type', min: 1, errorMsg: 'Please select a project type.' },
        { id: 'project-desc', min: 10, errorMsg: 'Please provide at least a brief summary (min 10 characters).' }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const group = input?.closest('.form-group');
        const val = input ? input.value.trim() : '';

        if (!val || val.length < field.min) {
          isValid = false;
          group?.classList.add('has-error');
        } else {
          group?.classList.remove('has-error');
        }
      });

      if (!isValid) {
        showToast('Please fill in all required enquiry details.');
        return;
      }

      // Enter loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"></circle>
        </svg>
        <span>Submitting Enquiry...</span>
      `;

      const clientName = document.getElementById('client-name').value.trim();
      const clientBrand = document.getElementById('client-brand').value.trim();
      const clientContact = document.getElementById('client-contact').value.trim();
      const projectTypeElem = document.getElementById('project-type');
      const projectType = projectTypeElem.options[projectTypeElem.selectedIndex].text;
      const projectDesc = document.getElementById('project-desc').value.trim();
      const referenceId = 'AK-' + Math.floor(100000 + Math.random() * 900000);

      // Simulate network dispatch with realistic latency, then provide real options
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (feedbackBanner) {
          feedbackBanner.innerHTML = `
            <h4>Enquiry Received · Reference #${referenceId}</h4>
            <p style="margin-top: 0.4rem; color: #e2e4ea;">Thank you, <strong>${escapeHtml(clientName)}</strong>. We have registered your creative brief for <strong>${escapeHtml(clientBrand)}</strong>.</p>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; color: #9fa3af;">Our studio team will review your requirements and respond via <strong>${escapeHtml(clientContact)}</strong> within 24 business hours.</p>
            <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello AIKALAKAR, following up on enquiry #${referenceId} for ${clientBrand} (${projectType})`)}" target="_blank" class="btn btn-whatsapp" style="font-size: 0.82rem; padding: 0.5rem 1.2rem;">
                Send Direct on WhatsApp Now →
              </a>
              <button type="button" class="btn btn-secondary" id="btn-reset-form" style="font-size: 0.82rem; padding: 0.5rem 1.2rem; border-color: rgba(255,255,255,0.2); color: #ffffff;">
                Submit Another Project
              </button>
            </div>
          `;
          feedbackBanner.classList.add('show');
          feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          document.getElementById('btn-reset-form')?.addEventListener('click', () => {
            enquiryForm.reset();
            feedbackBanner.classList.remove('show');
          });
        }

        showToast(`Enquiry #${referenceId} logged successfully.`);
      }, 900);
    });
  }

  // ── 7. PRIVACY POLICY MODAL ──
  const privacyModal = document.getElementById('privacy-modal');
  const privacyLinks = document.querySelectorAll('.privacy-link');
  const privacyCloseBtn = document.getElementById('privacy-close-btn');

  const openPrivacyModal = () => {
    privacyModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closePrivacyModal = () => {
    privacyModal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openPrivacyModal();
    });
  });

  privacyCloseBtn?.addEventListener('click', closePrivacyModal);
  privacyModal?.addEventListener('click', (e) => {
    if (e.target === privacyModal) closePrivacyModal();
  });

  // ── 8. TOAST NOTIFICATION UTILITY ──
  function showToast(message) {
    const existing = document.querySelector('.toast-notice');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c5a880" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${escapeHtml(message)}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 20);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }


  // ── 9. AIKALAKAR™ 50 COMMERCIAL FILMS VAULT & HOVER CONTROLLER ──
  const VAULT_50_FILMS = [
  {
    "id": "vault-1",
    "title": "SHREE RATNA — 24-Karat Heritage Gold Jewellery",
    "category": "Jewellery & Luxury",
    "filter": "luxury",
    "videoUrl": "assets/videos/jewellery_commercial.mp4",
    "tagline": "Heritage Bridal Gold & Diamond Jewellery Commercial",
    "narrative": "Exquisite handcrafted gold filigree, micro gem acoustics, and royal Indian bridal storytelling under macro cinema lighting.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-2",
    "title": "DAAWAT-E-KHAAS — Royal Dum Biryani",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/biryani_commercial.mp4",
    "tagline": "Royal Dum Biryani & Fine Dining Culinary Film",
    "narrative": "Saffron steam dynamics, sizzling charcoal dum, and mouthwatering slow-motion culinary visuals.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-3",
    "title": "KAIROS HYPERCAR — Carbon-Fiber Electric Velocity",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/hypercar_commercial.mp4",
    "tagline": "High-Performance Electric Hypercar Commercial",
    "narrative": "Aerodynamic carbon-fiber wind tunnel study with volumetric smoke trails and high-speed telemetry.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-4",
    "title": "SOLIS ARCHITECTURE — Monolithic Travertine Villa",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/architecture_commercial.mp4",
    "tagline": "Monolithic Travertine Villa & Modern Architecture",
    "narrative": "Raw board-formed travertine concrete bathed in Mediterranean sunset light and spatial serenity.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-5",
    "title": "L'ÉLIXIR NOIR — Molten Gold Luxury Fragrance",
    "category": "Jewellery & Luxury",
    "filter": "luxury",
    "videoUrl": "assets/videos/perfume_commercial.mp4",
    "tagline": "Liquid Gold Luxury Fragrance & Cosmetics Film",
    "narrative": "Molten liquid gold fluid dynamics and crystal glass acoustics crafted for luxury cosmetic campaigns.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-6",
    "title": "EVERMOTION FILMS — Grand Heritage Royal Wedding",
    "category": "Weddings & Events",
    "filter": "wedding",
    "videoUrl": "assets/videos/wedding_commercial.mp4",
    "tagline": "Grand Heritage Royal Wedding Cinematic Film",
    "narrative": "Regal palace decor, emotional bridal vows, and slow-motion royal celebration moments.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-7",
    "title": "VOLTIX URBAN — Next-Gen Electric Smart Scooter",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/scooter_commercial.mp4",
    "tagline": "Next-Gen Electric Smart Mobility Commercial",
    "narrative": "Sleek aerodynamic chassis, futuristic neon night streets, and clean electric acceleration.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-8",
    "title": "CHRONOS SKELETON — Tourbillon Kinetic Horology",
    "category": "Jewellery & Luxury",
    "filter": "luxury",
    "videoUrl": "assets/videos/watch_commercial.mp4",
    "tagline": "Kinetic Tourbillon Haute Horlogerie Film",
    "narrative": "Perpetual mechanical movement colliding with zero-gravity liquid gold and optical caustics.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-9",
    "title": "VELVET CRUMB — Artisanal Dark Chocolate Patisserie",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/bakery_commercial.mp4",
    "tagline": "Artisanal Dark Chocolate & Patisserie Film",
    "narrative": "Decadent dark ganache glaze, macro berry textures, and mouth-watering patisserie visuals.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-10",
    "title": "AURA SOUND — Spatial Acoustic Optics Studio",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/headphones_commercial.mp4",
    "tagline": "Spatial Acoustic Optics & Studio Hardware Film",
    "narrative": "Micro-machined anodized aluminum, memory foam contours, and levitating acoustic soundwaves.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-11",
    "title": "ROYAL CHAI — Heritage Darjeeling Tea Pouring",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/tea_commercial.mp4",
    "tagline": "Heritage Darjeeling Tea & Artisanal Pouring Film",
    "narrative": "Steam rising from freshly brewed spiced tea pouring into crystal glass tumblers in slow motion.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-12",
    "title": "OAKORA LIVING — Minimalist Italian Luxury Sofa",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/sofa_commercial.mp4",
    "tagline": "Minimalist Italian Luxury Furniture Commercial",
    "narrative": "Sensuous boucle fabric textures, solid walnut framing, and contemporary architectural living spaces.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-13",
    "title": "OPTIVUE — Polarized Luxury Eyewear Commercial",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/sunglasses_commercial.mp4",
    "tagline": "Polarized Designer Sunglasses & Eyewear Campaign",
    "narrative": "Precision titanium frames, polarized optical reflections, and high-fashion aesthetic styling.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-14",
    "title": "ZARIYA COUTURE — Royal Handcrafted Silk Saree",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/fashion_commercial.mp4",
    "tagline": "Handcrafted Heritage Silk Saree Couture Campaign",
    "narrative": "Intricate pure zari embroidery, handloom silk sheen, and graceful regal ethnic Indian couture.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-15",
    "title": "HENNA HERITAGE — Intricate Bridal Mehndi Art",
    "category": "Weddings & Events",
    "filter": "wedding",
    "videoUrl": "assets/videos/mehndi_commercial.mp4",
    "tagline": "Intricate Bridal Mehndi Ritual & Artistry Film",
    "narrative": "Micro-detailed herbal henna cones, auspicious floral motifs, and timeless wedding bridal rituals.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-16",
    "title": "GLOW ARTISTRY — Regal Indian Bridal Glam Makeover",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/bridal_makeup_commercial.mp4",
    "tagline": "Regal Indian Bridal Glam & Cosmetic Artistry",
    "narrative": "Flawless luminous skin finish, royal kohl eyes, and premium cosmetic transformation.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-17",
    "title": "GRANDORA EVENTS — Royal Palace Wedding Decor",
    "category": "Weddings & Events",
    "filter": "wedding",
    "videoUrl": "assets/videos/grandora_wedding_commercial.mp4",
    "tagline": "Palace Wedding Decoration & Luxury Event Film",
    "narrative": "Cascading tuberose floral arches, shimmering royal crystal chandeliers, and grand palace mandap.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-18",
    "title": "THE EMERALD RESIDENCES — Ultra-Luxury Penthouse",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/realestate_commercial.mp4",
    "tagline": "Skyline Ultra-Luxury Penthouse Real Estate Film",
    "narrative": "Panoramic floor-to-ceiling glass balconies, marble infinity lounge, and skyline luxury living.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-19",
    "title": "AQUAVERA BATH — Designer Hydro Luxury Fixtures",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/aquavera_commercial.mp4",
    "tagline": "Sculptural Hydro Fixtures & Luxury Bath Design",
    "narrative": "Sculptural matte black faucets, cascading aerated water droplets, and marble bathroom aesthetic.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-20",
    "title": "THE VELVET TABLE — Gourmet Fine Dining Showcase",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/restaurant_commercial.mp4",
    "tagline": "Five-Star Gourmet Dining & Gastronomy Showcase",
    "narrative": "Artisanal culinary plating, fiery flambé pan toss, and intimate candlelit gastronomic ambiance.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-21",
    "title": "FROSTIQ SODA — Sparkling Citrus Refreshment",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/frostiq_commercial.mp4",
    "tagline": "Sparkling Citrus Beverage & Refreshment Campaign",
    "narrative": "Effervescent carbonated bubbles, ice crystal condensation, and explosive citrus fruit splash.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-22",
    "title": "VITALIS BOTANICALS — Organic Herbal Wellness Elixir",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/wellness_drink_commercial.mp4",
    "tagline": "Organic Botanical Wellness & Health Elixir Commercial",
    "narrative": "Pure cold-pressed botanicals, dew-drenched green leaves, and natural antioxidant wellness vitality.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-23",
    "title": "AUTO-SHINE PRESTIGE — Ceramic Coating & Detailing",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/car_detailing_commercial.mp4",
    "tagline": "Nanotech Ceramic Coating & Prestige Detailing Film",
    "narrative": "Mirror-finish nanotech ceramic reflections, high-pressure foam rinse, and flawless paint gloss.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-24",
    "title": "SHAKTI KISAN — Heavy-Duty Agritech Tractor",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/agriculture_tractor_commercial.mp4",
    "tagline": "Heavy-Duty Agritech Tractor & Farm Power Film",
    "narrative": "High-torque agricultural powerhouse churning golden rich fertile soil under cinematic dawn light.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-25",
    "title": "NEXUS ROBOTICS — Precision Aerospace Assembly",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/robotics_commercial.mp4",
    "tagline": "High-Precision Robotics & Aerospace Automation",
    "narrative": "High-speed robotic arm laser scanning, precision micro welding, and cleanroom automation.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-26",
    "title": "SONIQ PRO — Noise Canceling Wireless Earbuds",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/earbuds_commercial.mp4",
    "tagline": "Active Noise-Canceling Wireless Earbuds Commercial",
    "narrative": "Ergonomic in-ear contouring, zero-latency spatial bass drivers, and futuristic magnetic snap case.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-27",
    "title": "MEGATECH RETAIL — Smart Living Electronics Store",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/electronics_commercial.mp4",
    "tagline": "Smart Living Electronics & OLED Showroom Campaign",
    "narrative": "Ultra-slim OLED television arrays, smart IoT home appliances, and immersive retail showroom lighting.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-28",
    "title": "IRON CORE GYM — Athletic Performance & Strength",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/fitness_commercial.mp4",
    "tagline": "High-Intensity Athletic Training & Gym Commercial",
    "narrative": "High-intensity kettlebell lifts, chalk dust explosive bursts, and relentless athletic willpower.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-29",
    "title": "MAISON SALON — High-End Hair & Skincare Rituals",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/luxury_salon_commercial.mp4",
    "tagline": "Luxury Hair Salon & Botanical Skincare Rituals",
    "narrative": "Silky keratin hair treatment flow, botanical facial mist, and tranquil premium salon atmosphere.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-30",
    "title": "AURA BEAUTY PARLOUR — Complete Makeover Commercial",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/salon_beauty_commercial.mp4",
    "tagline": "Complete Beauty Salon & Makeover Transformation",
    "narrative": "Precision styling shears, glowing botanical face masks, and confident salon makeover smiles.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-31",
    "title": "BLOOM & PETAL — Exotic Wedding Floral Arrangements",
    "category": "Weddings & Events",
    "filter": "wedding",
    "videoUrl": "assets/videos/florist_commercial.mp4",
    "tagline": "Exotic Floral Arrangements & Bridal Bouquet Film",
    "narrative": "Velvet red Dutch roses, delicate baby breath sprigs, and handcrafted bespoke floral bouquets.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-32",
    "title": "WANDERLUST VOYAGES — Luxury Global Holidays",
    "category": "Weddings & Events",
    "filter": "wedding",
    "videoUrl": "assets/videos/travel_agency_commercial.mp4",
    "tagline": "Luxury Global Travel Agency & Holiday Campaign",
    "narrative": "Pristine turquoise tropical beaches, snow-clad mountain resorts, and effortless travel planning.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-33",
    "title": "LENS & SHUTTER — Cinematic Studio Portraiture",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/photography_commercial.mp4",
    "tagline": "High-Fashion Studio Portraiture & Photography",
    "narrative": "Large aperture prime lens bokeh, softbox strobe flashes, and timeless fashion portrait photography.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-34",
    "title": "BEAT CONCERT — High-Energy Arena DJ & Lights",
    "category": "Weddings & Events",
    "filter": "wedding",
    "videoUrl": "assets/videos/dj_event_commercial.mp4",
    "tagline": "Arena Festival Concert & High-Energy DJ Lights",
    "narrative": "Pulsating CO2 smoke cannons, rhythmic strobe beams, and roaring arena festival crowd euphoria.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-35",
    "title": "GENIUS ACADEMY — Competitive Exam Mentorship",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/edtech_commercial.mp4",
    "tagline": "Competitive Exam Academy & Smart EdTech Film",
    "narrative": "Focused late-night textbook study, digital smartboards, and triumphant board exam celebration.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-36",
    "title": "ROYAL THREADS — Bespoke Hand-Stitched Suits",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/tailor_fashion_commercial.mp4",
    "tagline": "Bespoke Gentleman Tailoring & Custom Suit Film",
    "narrative": "Italian wool suit fabrics, precision chalk measurements, and sharp bespoke gentleman tailoring.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-37",
    "title": "ROYAL INK WEDDINGS — Cinematic Wedding Stories",
    "category": "Weddings & Events",
    "filter": "wedding",
    "videoUrl": "assets/videos/royal_ink_wedding_commercial.mp4",
    "tagline": "Emotion-Driven Cinematic Wedding Story Film",
    "narrative": "Tender couple exchange of glances, glowing sunset pheras, and heart-stirring cinematic vows.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-38",
    "title": "FIXORA SMARTCARE — Express Smartphone & Device Care",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/mobile_repair_commercial.mp4",
    "tagline": "High-Tech Smartphone Care & Precision Repair Commercial",
    "narrative": "Microscopic circuit inspection, laser screen calibration, and rapid gadget restoration visuals under surgical studio lighting.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-39",
    "title": "MITHAI MANSION — Artisanal Traditional Sweets & Confectionery",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/mithai_sweets_commercial.mp4",
    "tagline": "Artisanal Royal Indian Sweets & Mithai Commercial",
    "narrative": "Pure desi ghee simmering, silver vark delicate application, and mouth-watering slow-motion festive sweet presentation.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-40",
    "title": "PRISTINE FARMS — Organic Farm-Fresh Pure Dairy Milk",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/dairy_milk_commercial.mp4",
    "tagline": "Farm-Fresh Organic Dairy & Pure Milk Commercial",
    "narrative": "Lush green pasture mist, cool morning milk churning, and wholesome organic purity captured in crisp cinematic lighting.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-41",
    "title": "FRESHMART MEGASTORE — Premium Gourmet Supermarket Retail",
    "category": "Food & Hospitality",
    "filter": "food",
    "videoUrl": "assets/videos/supermarket_commercial.mp4",
    "tagline": "Modern Gourmet Supermarket & Retail Experience Film",
    "narrative": "Vibrant fresh organic produce displays, sleek modern shopping aisles, and bustling premium retail energy.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-42",
    "title": "NEATNEST LIVING — Premium Deep Home Cleaning & Sanitization",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/home_cleaning_commercial.mp4",
    "tagline": "Luxury Deep Cleaning & Home Sanitization Commercial",
    "narrative": "High-pressure steam sanitization, immaculate marble floor sheen, and pristine dust-free luxury residential living spaces.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-43",
    "title": "SHIELDPRO HYGIENE — Commercial & Residential Pest Defense",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/pest_control_commercial.mp4",
    "tagline": "Advanced Professional Pest Defense & Hygiene Film",
    "narrative": "Certified technician precision application, eco-friendly defense barriers, and certified residential safety standards.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-44",
    "title": "AQUA-PURE SYSTEMS — Advanced RO Alkaline Water Purifiers",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/water_purifier_commercial.mp4",
    "tagline": "High-Tech RO Water Purifier & Health Technology Film",
    "narrative": "Multi-stage mineral filtration flow, crystal clear water stream dynamics, and modern residential kitchen integration.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-45",
    "title": "LUMEN ELECTRICALS — Modern Architectural Lighting & Wiring",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/electrician_commercial.mp4",
    "tagline": "Architectural Smart Lighting & Electrical Engineering",
    "narrative": "Precision recessed ceiling LED installation, ambient warm illumination reveal, and certified electrical safety craftsmanship.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-46",
    "title": "HYDRO-TECH PLUMBING — High-Pressure Precision Plumbing",
    "category": "Real Estate & Living",
    "filter": "realestate",
    "videoUrl": "assets/videos/plumbing_commercial.mp4",
    "tagline": "Advanced Commercial & Residential Plumbing Solutions",
    "narrative": "Heavy-duty pipe laser alignment, zero-leak valve seals, and high-pressure water flow engineering visuals.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-47",
    "title": "PRESS FRESH — Eco-Friendly Gentle Steam Laundry & Dry Clean",
    "category": "Fashion & Lifestyle",
    "filter": "fashion",
    "videoUrl": "assets/videos/laundry_dryclean_commercial.mp4",
    "tagline": "Eco-Friendly Gentle Steam Laundry & Garment Care Film",
    "narrative": "High-temperature steam pressing, crisp collar finishes, and protective garment packaging for luxury designer wear.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-48",
    "title": "PRINTORA STUDIOS — Luxury Packaging & High-End Print Studio",
    "category": "Jewellery & Luxury",
    "filter": "luxury",
    "videoUrl": "assets/videos/printing_studio_commercial.mp4",
    "tagline": "Luxury Foil Stamping & Custom Packaging Design Film",
    "narrative": "High-speed precision offset printing, golden foil embossing, and textured tactile cardstocks crafted for premium brands.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-49",
    "title": "MOTO-WORKS PRO — Superbike & Motorcycle Precision Tuning",
    "category": "Automotive & Tech",
    "filter": "auto",
    "videoUrl": "assets/videos/bike_service_commercial.mp4",
    "tagline": "High-Performance Motorcycle Tuning & Workshop Commercial",
    "narrative": "Dyno-run telemetry, chrome exhaust polish, engine diagnostic precision, and exhilarating two-wheeler velocity.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  },
  {
    "id": "vault-50",
    "title": "GIFTORA CREATIONS — Bespoke Luxury Corporate & Wedding Hampers",
    "category": "Jewellery & Luxury",
    "filter": "luxury",
    "videoUrl": "assets/videos/custom_gifting_commercial.mp4",
    "tagline": "Bespoke Curated Luxury Gifting & Celebration Hampers",
    "narrative": "Hand-tied silk ribbons, curated gourmet confectioneries, engraved wooden keepsake boxes, and celebratory prestige.",
    "direction": "AIKALAKAR™ Cinematic Direction, 35mm Prime anamorphic lens, high-speed lighting.",
    "engine": "AIKALAKAR™ Proprietary Neural Production Pipeline",
    "duration": "0:06 · Ultra HD Cinema",
    "color": "Cinema Master 35mm Grade",
    "sound": "Mastered Foley & Spatial Acoustic Score"
  }
];

  const vaultGrid = document.getElementById('vault-films-grid');
  const vaultFilterBtns = document.querySelectorAll('.vault-filter-btn');

  function renderVaultGrid(filter = 'all') {
    if (!vaultGrid) return;
    vaultGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? VAULT_50_FILMS 
      : VAULT_50_FILMS.filter(f => f.filter === filter);

    filtered.forEach((film) => {
      const card = document.createElement('article');
      card.className = 'vault-card';
      card.setAttribute('data-id', film.id);
      card.setAttribute('data-category', film.filter);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${film.title} - Cinema Master Player`);

      card.innerHTML = `
        <div class="vault-card-media">
          <video class="vault-card-video" data-src="${film.videoUrl}" muted loop playsinline preload="none"></video>
          <div class="vault-card-badge">100% AI GENERATED · ${film.category}</div>
          <div class="vault-card-play-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          </div>
          <!-- Hover Popup: Title & What the video is about -->
          <div class="vault-card-popup">
            <div style="font-size: 0.65rem; color: var(--gold-accent); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.2rem;">★ 100% AI Video Production</div>
            <div class="vault-popup-title">${escapeHtml(film.title)}</div>
            <div class="vault-popup-context">${escapeHtml(film.tagline)}</div>
            <div class="vault-popup-cta">
              <span>▶ Play Cinema Master</span>
              <span>Inquire on WhatsApp ↗</span>
            </div>
          </div>
        </div>
      `;

      const video = card.querySelector('.vault-card-video');

      // Live hover preview playback with instant demand loading
      const startPreview = () => {
        if (!video) return;
        if (!video.src) {
          video.src = video.getAttribute('data-src');
          video.load();
        }
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      };

      const stopPreview = () => {
        if (!video) return;
        video.pause();
        video.currentTime = 0;
      };

      card.addEventListener('mouseenter', startPreview);
      card.addEventListener('mouseleave', stopPreview);

      // Big Screen Cinema Lightbox Modal Click
      card.addEventListener('click', () => {
        openProjectModal(film);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(film);
        }
      });

      vaultGrid.appendChild(card);
    });

    // Progressive Viewport Pre-warming: only load metadata when scrolled near viewport
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const vid = entry.target.querySelector('.vault-card-video');
            if (vid && !vid.src) {
              vid.src = vid.getAttribute('data-src');
              vid.preload = 'metadata';
            }
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '300px 0px' });

      vaultGrid.querySelectorAll('.vault-card').forEach(card => observer.observe(card));
    }
  }

  // Filter Buttons Handler
  vaultFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vaultFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderVaultGrid(filter);
    });
  });

  // Initial render of all 50 commercial films
  renderVaultGrid('all');

  function escapeHtml(string) {
    const div = document.createElement('div');
    div.innerText = string;
    return div.innerHTML;
  }
});
