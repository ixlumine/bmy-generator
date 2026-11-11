(function () {
  'use strict';

  const STORAGE_KEY = 'bmy_personal_canvas_state_v10';

  /* ----------------------------------------------------------------------
     1. BILINGUAL DICTIONARY (ID & EN) + SCHEMA
     ---------------------------------------------------------------------- */
  const I18N = {
    id: {
      nav_grid: 'Grid',
      nav_ratio: 'Rasio',
      mode_smart: 'Smart 9-Box',
      mode_bento: 'Bento 3-4-2',
      mode_equal: 'Equal',
      btn_guide: 'Panduan',
      btn_sample: 'Sampel',
      tab_content: 'Isi Kanvas (01-09)',
      tab_layout: 'Layout, Spasi & Tema',
      sec_profile: 'Profil & Metadata Kanvas',
      lbl_name: 'Nama Lengkap',
      ph_name: 'Masukkan nama lengkap Anda',
      lbl_role: 'Target Karier / Posisi',
      ph_role: 'Contoh: Platform Architect',
      lbl_date: 'Tanggal Pembaruan',
      sec_elements: '9 Elemen Business Model You',
      hint_one_line: '1 baris = 1 poin',
      sec_ratio_grid: 'Rasio Halaman & Struktur Grid',
      lbl_page_ratio: 'Rasio Halaman Kanvas (Page Ratio)',
      hint_page_ratio: 'Auto Fit merapatkan tinggi kanvas sesuai panjang teks. A4, 16:9, dan 4:3 mengunci rasio proporsi halaman.',
      lbl_grid_mode: 'Mode Tata Letak Kotak',
      sec_spacing_density: 'Jarak Antar Poin & Kepadatan',
      lbl_point_spacing: 'Jarak Antar Poin (Point Spacing)',
      sp_tight: 'Dekat',
      sp_normal: 'Normal',
      sp_relaxed: 'Lega',
      sp_even: 'Merata',
      hint_point_spacing: 'Pilih Dekat atau Normal agar poin tersusun rapat dan nyaman dibaca dari atas.',
      lbl_bullet_style: 'Gaya Visual Poin',
      bstyle_minimal: 'Bullet List Klasik',
      bstyle_cards: 'Sub-Card Box',
      lbl_density: 'Ukuran & Kepadatan Teks (Density)',
      chk_multicol: 'Susun Horizontal Poin Cost & Revenue',
      chk_numbers: 'Tampilkan Nomor Blok (01 - 09)',
      chk_icons: 'Tampilkan Ikon Kategori SVG',
      sec_dimensions: 'Dimensi Lebar Pixel Kanvas',
      lbl_custom_width: 'Lebar Kustom Pixel (Width)',
      lbl_min_height: 'Tinggi Minimum Tambahan',
      sec_themes: 'Preset Tema Visual',
      sec_custom_colors: 'Kustomisasi Warna Manual',
      btn_open_panel: 'Buka Panel',
      canvas_eyebrow: 'Business Model You — Arsitektur Karier Personal',
      canvas_role_label: 'Target Karier / Posisi',
      canvas_date_label: 'Tanggal',
      default_name: 'Nama Lengkap Anda',
      default_role: 'Target Karier / Posisi',
      btn_add_point: 'Poin',
      ph_textarea_prefix: 'Tulis poin untuk',
      ph_textarea_suffix: '(pisahkan baris baru)...',
      nav_hint: 'Direct Edit: Klik teks di kartu (Enter = Poin baru) | Geser: Drag stage | Zoom: Ctrl + Scroll',
      guide_title: 'Tentang Business Model You (Personal Business Model Canvas)',
      guide_html: `
        <p>
          <strong>Business Model You</strong> adalah adaptasi satu halaman dari Business Model Canvas ciptaan Alexander Osterwalder yang diformulasikan oleh Tim Clark secara spesifik untuk perencanaan karier personal. Alat visual ini membantu profesional memetakan nilai kerja, memperjelas arah transisi karier, serta menyelaraskan aktivitas inti dengan pasar kerja modern.
        </p>
        <h3>Struktur 9 Elemen Kunci Personal Canvas:</h3>
        <ul class="seo-grid-list">
          <li><strong>01. Key Partners:</strong> Siapa saja yang membantu dan mendukung Anda mencapai target profesional.</li>
          <li><strong>02. Key Activities:</strong> Apa saja tindakan serta aktivitas bernilai tinggi yang rutin Anda lakukan.</li>
          <li><strong>03. Key Resources:</strong> Siapa diri Anda, keahlian utama, minat, serta aset intelektual yang Anda miliki.</li>
          <li><strong>04. Value Proposition:</strong> Bagaimana solusi dan kapabilitas Anda membantu menyelesaikan masalah orang lain.</li>
          <li><strong>05. Customer Relationships:</strong> Bagaimana pola interaksi, komunikasi, dan kepercayaan Anda bangun.</li>
          <li><strong>06. Channels:</strong> Bagaimana klien atau perusahaan mengenal, mengevaluasi, dan menerima hasil kerja Anda.</li>
          <li><strong>07. Customer Segments:</strong> Siapa target spesifik yang paling membutuhkan kontribusi dan keahlian Anda.</li>
          <li><strong>08. Cost Structure:</strong> Apa saja waktu, energi kognitif, biaya finansial, dan pengorbanan yang Anda berikan.</li>
          <li><strong>09. Revenue Streams:</strong> Apa kompensasi moneter, reputasi profesional, otonomi, dan kepuasan yang Anda dapatkan.</li>
        </ul>
      `,
      clear_title: 'Konfirmasi Kosongkan Kanvas',
      clear_desc: 'Seluruh teks pada kesembilan blok Business Model You dan metadata profil akan dihapus. Tindakan ini tidak dapat dibatalkan.',
      btn_cancel: 'Batal',
      btn_confirm_clear: 'Kosongkan Sekarang',
      toast_lang: 'Bahasa diubah ke Bahasa Indonesia',
      toast_ratio: 'Rasio Halaman:',
      toast_layout_smart: 'Mode 9-Box Smart Simetris Aktif',
      toast_layout_bento: 'Mode Bento Simetris (3-4-2) Aktif',
      toast_layout_equal: 'Mode Klasik 5 Kolom Sama Lebar Aktif',
      toast_density: 'Kepadatan teks diterapkan:',
      toast_theme: 'Tema diterapkan:',
      toast_sample: 'Sampel data profil berhasil dimuat',
      toast_clear: 'Seluruh isian kanvas telah dikosongkan',
      toast_json_export: 'File JSON berhasil diunduh',
      toast_json_import: 'Konfigurasi JSON berhasil diimpor',
      toast_png_export: 'Gambar PNG resolusi tinggi (3x) berhasil diunduh',
      toast_pdf_export: 'Dokumen PDF A4 Landscape berhasil diunduh'
    },
    en: {
      nav_grid: 'Grid',
      nav_ratio: 'Ratio',
      mode_smart: 'Smart 9-Box',
      mode_bento: 'Bento 3-4-2',
      mode_equal: 'Equal',
      btn_guide: 'Guide',
      btn_sample: 'Sample',
      tab_content: 'Canvas Content (01-09)',
      tab_layout: 'Layout, Spacing & Theme',
      sec_profile: 'Profile & Canvas Metadata',
      lbl_name: 'Full Name',
      ph_name: 'Enter your full name',
      lbl_role: 'Target Role / Career',
      ph_role: 'e.g. Platform Architect',
      lbl_date: 'Last Updated',
      sec_elements: '9 Elements of Business Model You',
      hint_one_line: '1 line = 1 bullet',
      sec_ratio_grid: 'Page Ratio & Grid Structure',
      lbl_page_ratio: 'Canvas Page Ratio',
      hint_page_ratio: 'Auto Fit hugs content height tightly. A4, 16:9, and 4:3 lock the canvas aspect ratio for slides or print.',
      lbl_grid_mode: 'Box Layout Mode',
      sec_spacing_density: 'Point Spacing & Density',
      lbl_point_spacing: 'Point Spacing',
      sp_tight: 'Tight',
      sp_normal: 'Normal',
      sp_relaxed: 'Relaxed',
      sp_even: 'Even',
      hint_point_spacing: 'Choose Tight or Normal to keep bullet points compact and top-aligned.',
      lbl_bullet_style: 'Bullet Visual Style',
      bstyle_minimal: 'Classic Bullet List',
      bstyle_cards: 'Sub-Card Box',
      lbl_density: 'Text Size & Density',
      chk_multicol: 'Horizontal Layout for Cost & Revenue',
      chk_numbers: 'Show Block Numbers (01 - 09)',
      chk_icons: 'Show Category SVG Icons',
      sec_dimensions: 'Canvas Pixel Width',
      lbl_custom_width: 'Custom Pixel Width',
      lbl_min_height: 'Additional Min-Height',
      sec_themes: 'Visual Theme Presets',
      sec_custom_colors: 'Manual Color Overrides',
      btn_open_panel: 'Open Panel',
      canvas_eyebrow: 'Business Model You — Personal Career Architecture',
      canvas_role_label: 'Target Role / Position',
      canvas_date_label: 'Date',
      default_name: 'Your Full Name',
      default_role: 'Target Role / Position / Specialization',
      btn_add_point: 'Point',
      ph_textarea_prefix: 'Write points for',
      ph_textarea_suffix: '(separate with new lines)...',
      nav_hint: 'Direct Edit: Click text on card (Enter = New point) | Pan: Drag stage | Zoom: Ctrl + Scroll',
      guide_title: 'About Business Model You (Personal Business Model Canvas)',
      guide_html: `
        <p>
          <strong>Business Model You</strong> is a single-page career planning methodology adapted from Alexander Osterwalder's Business Model Canvas by Tim Clark. This visual framework helps professionals map their personal value, clarify career transitions, and align core activities with modern market needs.
        </p>
        <h3>The 9 Core Building Blocks:</h3>
        <ul class="seo-grid-list">
          <li><strong>01. Key Partners:</strong> Who helps and supports you in achieving your professional goals.</li>
          <li><strong>02. Key Activities:</strong> The high-value actions and tasks you perform regularly.</li>
          <li><strong>03. Key Resources:</strong> Who you are, your core skills, interests, and intellectual assets.</li>
          <li><strong>04. Value Proposition:</strong> How your capabilities help solve problems for others.</li>
          <li><strong>05. Customer Relationships:</strong> How you interact, communicate, and build trust.</li>
          <li><strong>06. Channels:</strong> How clients or organizations discover, evaluate, and receive your work.</li>
          <li><strong>07. Customer Segments:</strong> The specific audiences or teams that need your contribution most.</li>
          <li><strong>08. Cost Structure:</strong> The time, cognitive energy, financial cost, and trade-offs you invest.</li>
          <li><strong>09. Revenue Streams:</strong> The financial compensation, reputation, autonomy, and fulfillment you gain.</li>
        </ul>
      `,
      clear_title: 'Confirm Clear Canvas',
      clear_desc: 'All text across the nine Business Model You blocks and profile metadata will be cleared. This action cannot be undone.',
      btn_cancel: 'Cancel',
      btn_confirm_clear: 'Clear All Now',
      toast_lang: 'Language switched to English',
      toast_ratio: 'Page Ratio:',
      toast_layout_smart: 'Smart 9-Box Symmetric Mode Active',
      toast_layout_bento: 'Bento Symmetric (3-4-2) Mode Active',
      toast_layout_equal: 'Classic Equal 5-Column Mode Active',
      toast_density: 'Text density applied:',
      toast_theme: 'Theme applied:',
      toast_sample: 'Sample profile data loaded',
      toast_clear: 'Canvas has been cleared',
      toast_json_export: 'JSON file downloaded',
      toast_json_import: 'JSON configuration imported',
      toast_png_export: 'High-resolution PNG (3x) downloaded',
      toast_pdf_export: 'A4 Landscape PDF downloaded'
    }
  };

  const BMY_SCHEMA = [
    { id: 'partners', num: '01', title: 'Key Partners', sub_id: 'Siapa yang Membantu Anda', sub_en: 'Who Helps You', icon: 'handshake', accentType: 'default' },
    { id: 'activities', num: '02', title: 'Key Activities', sub_id: 'Apa yang Anda Kerjakan', sub_en: 'What You Do', icon: 'activity', accentType: 'default' },
    { id: 'resources', num: '03', title: 'Key Resources', sub_id: 'Siapa Anda & Apa yang Anda Miliki', sub_en: 'Who You Are & What You Have', icon: 'layers', accentType: 'default' },
    { id: 'value', num: '04', title: 'Value Proposition', sub_id: 'Bagaimana Anda Membantu', sub_en: 'How You Help', icon: 'sparkles', accentType: 'featured' },
    { id: 'relationships', num: '05', title: 'Customer Relationships', sub_id: 'Bagaimana Anda Berinteraksi', sub_en: 'How You Interact', icon: 'messages-square', accentType: 'default' },
    { id: 'channels', num: '06', title: 'Channels', sub_id: 'Bagaimana Mereka Mengenal Anda', sub_en: 'How They Know You & Deliver', icon: 'share-2', accentType: 'default' },
    { id: 'segments', num: '07', title: 'Customer Segments', sub_id: 'Siapa yang Anda Bantu', sub_en: 'Who You Help', icon: 'users', accentType: 'default' },
    { id: 'costs', num: '08', title: 'Cost Structure', sub_id: 'Apa yang Anda Berikan (Waktu, Energi & Biaya)', sub_en: 'What You Give (Time, Energy & Investment)', icon: 'scale', accentType: 'default' },
    { id: 'revenues', num: '09', title: 'Revenue Streams', sub_id: 'Apa yang Anda Dapatkan (Kompensasi & Kepuasan)', sub_en: 'What You Get (Compensation & Fulfillment)', icon: 'trending-up', accentType: 'secondary' }
  ];

  const PAGE_RATIOS = {
    'auto': { label: 'AUTO FIT', aspect: null },
    'a4': { label: 'A4 LANDSCAPE (297:210)', aspect: 297 / 210 },
    '16-9': { label: '16:9 WIDESCREEN', aspect: 16 / 9 },
    '4-3': { label: '4:3 STANDARD BOARD', aspect: 4 / 3 }
  };

  const THEME_PRESETS = {
    'modern-tech': { canvasBg: '#F8FAFC', cardBg: '#FFFFFF', textColor: '#0F172A', mutedColor: '#475569', accentColor: '#2563EB', secondaryAccent: '#10B981', borderColor: '#CBD5E1', radius: '8px', borderWidth: '1px' },
    'obsidian-dark': { canvasBg: '#0B0F17', cardBg: '#1E293B', textColor: '#F1F5F9', mutedColor: '#94A3B8', accentColor: '#06B6D4', secondaryAccent: '#22D3EE', borderColor: '#334155', radius: '8px', borderWidth: '1px' },
    'warm-academic': { canvasBg: '#FDFBF7', cardBg: '#FAF7F0', textColor: '#1C1917', mutedColor: '#57534E', accentColor: '#C2410C', secondaryAccent: '#B45309', borderColor: '#D6D3D1', radius: '6px', borderWidth: '1px' },
    'swiss-contrast': { canvasBg: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#000000', mutedColor: '#262626', accentColor: '#FACC15', secondaryAccent: '#000000', borderColor: '#000000', radius: '0px', borderWidth: '1.5px' }
  };

  /* ----------------------------------------------------------------------
     2. SAMPLE DATA PRESETS (ID & EN)
     ---------------------------------------------------------------------- */
  const SAMPLE_CONTENT = {
    id: {
      meta: {
        name: "Nama Lengkap Anda",
        role: "Target Posisi / Karier / Spesialisasi",
        date: "2026-11-11"
      },
      elements: {
        partners: [
          "Pihak, mentor, kolega, atau komunitas yang mendukung Anda",
          "Partner akuntabilitas atau rekan kolaborasi proyek",
          "Penyedia platform, alat, atau infrastruktur pendukung"
        ].join('\n'),
        activities: [
          "Aktivitas kunci yang rutin Anda kerjakan untuk menghasilkan nilai",
          "Eksplorasi teknis, riset arsitektur, atau pembuatan prototipe",
          "Pengembangan keahlian spesifik atau sertifikasi"
        ].join('\n'),
        resources: [
          "Keahlian teknis dan domain knowledge utama yang Anda kuasai",
          "Aset intelektual, repositori portofolio, atau sistem yang Anda miliki",
          "Karakter personal, daya tahan kognitif, dan etos kerja"
        ].join('\n'),
        value: [
          "Solusi utama yang Anda tawarkan kepada pengguna atau organisasi",
          "Dampak nyata: efisiensi, skalabilitas, atau simplifikasi proses",
          "Diferensiasi unik yang membedakan Anda dari talenta lain"
        ].join('\n'),
        relationships: [
          "Cara Anda membangun kepercayaan dan berinteraksi dengan pemangku kepentingan",
          "Gaya komunikasi: asinkron berbasis dokumentasi presisi, konsultatif, atau hands-on",
          "Transparansi pelaporan progres dan akuntabilitas hasil"
        ].join('\n'),
        channels: [
          "Kanal utama orang menemukan dan melihat kapabilitas Anda (GitHub, LinkedIn, Website)",
          "Cara Anda mendemonstrasikan hasil kerja secara langsung",
          "Tulisan teknis, studi kasus, atau dokumentasi publik"
        ].join('\n'),
        segments: [
          "Pihak spesifik yang paling membutuhkan solusi dan keahlian Anda",
          "Karakteristik tim, industri, atau klien yang menjadi target utama",
          "Pembuat keputusan atau pengguna akhir dari sistem yang Anda bangun"
        ].join('\n'),
        costs: [
          "Waktu, fokus mental, dan energi yang Anda investasikan setiap minggu",
          "Biaya infrastruktur, langganan alat bantu, atau biaya pembelajaran",
          "Trade-off waktu luang demi mencapai target jangka panjang"
        ].join('\n'),
        revenues: [
          "Kompensasi finansial utama (gaji, royalti, retainer, kontrak proyek)",
          "Aset jangka panjang: reputasi, portofolio kredibel, dan jaringan profesional",
          "Kepuasan personal, otonomi kerja, dan kejelasan arah pengembangan karier"
        ].join('\n')
      }
    },
    en: {
      meta: {
        name: "Your Full Name",
        role: "Target Role / Career / Specialization",
        date: "2026-11-11"
      },
      elements: {
        partners: [
          "Mentors, peers, colleagues, or communities that support your growth",
          "Accountability partners or project collaborators",
          "Key platforms, tools, or infrastructure providers"
        ].join('\n'),
        activities: [
          "Core high-value activities you perform regularly",
          "Technical exploration, system architecture research, or prototyping",
          "Targeted skill development and professional certifications"
        ].join('\n'),
        resources: [
          "Core technical expertise and domain knowledge you command",
          "Intellectual assets, portfolio repositories, or systems you have built",
          "Personal character, cognitive resilience, and work ethic"
        ].join('\n'),
        value: [
          "Primary solutions you deliver to users, clients, or organizations",
          "Tangible impact: efficiency, scalability, or process simplification",
          "Unique differentiation that sets you apart from other talent"
        ].join('\n'),
        relationships: [
          "How you build trust and collaborate with stakeholders",
          "Communication style: precision async documentation, consultative, or hands-on",
          "Transparent progress reporting and outcome accountability"
        ].join('\n'),
        channels: [
          "Primary channels where people discover your work (GitHub, LinkedIn, Portfolio)",
          "How you demonstrate and deliver your work outputs directly",
          "Technical articles, case studies, or public documentation"
        ].join('\n'),
        segments: [
          "Specific teams, organizations, or clients that need your expertise most",
          "Target industries or decision-makers looking for your capabilities",
          "End-users who directly benefit from the systems you build"
        ].join('\n'),
        costs: [
          "Time, mental focus, and cognitive energy invested each week",
          "Infrastructure costs, software subscriptions, or learning investments",
          "Personal leisure trade-offs made to hit long-term milestones"
        ].join('\n'),
        revenues: [
          "Primary financial compensation (salary, retainers, royalties, contracts)",
          "Long-term career assets: reputation, credible portfolio, and network",
          "Personal fulfillment, work autonomy, and clear career trajectory"
        ].join('\n')
      }
    }
  };

  function getSampleState(lang = 'id') {
    const sample = SAMPLE_CONTENT[lang] || SAMPLE_CONTENT.id;
    return {
      meta: JSON.parse(JSON.stringify(sample.meta)),
      elements: JSON.parse(JSON.stringify(sample.elements)),
      settings: {
        lang: lang,
        density: "normal",
        pageRatio: "auto",
        layoutMode: "smart-9box",
        pointSpacing: "tight",
        bulletStyle: "minimal",
        wideMulticol: true,
        boxMinHeight: 0,
        canvasWidth: 1280,
        sidebarWidth: 430,
        sidebarCollapsed: false,
        showNumbers: true,
        showIcons: true,
        theme: "modern-tech",
        customColors: {
          canvasBg: "#F8FAFC",
          cardBg: "#FFFFFF",
          accentColor: "#2563EB",
          borderColor: "#CBD5E1"
        }
      }
    };
  }

  /* ----------------------------------------------------------------------
     3. STATE & STORAGE
     ---------------------------------------------------------------------- */
  let state = loadStateFromStorage();
  let currentRenderedTopology = null;

  function loadStateFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.meta && parsed.elements && parsed.settings) {
          if (!parsed.settings.lang) parsed.settings.lang = 'id';
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Failed to read localStorage, using default state.', err);
    }
    return getSampleState('id');
  }

  function saveStateToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('Failed to save state:', err);
    }
  }

  function t(key) {
    const lang = (state.settings && state.settings.lang) || 'id';
    return (I18N[lang] && I18N[lang][key]) || I18N.id[key] || key;
  }

  function getItemSubtitle(item) {
    const lang = (state.settings && state.settings.lang) || 'id';
    return lang === 'en' ? item.sub_en : item.sub_id;
  }

  /* Check if current canvas content is identical to a language's default sample */
  function isContentMatchingSample(langKey) {
    const sample = SAMPLE_CONTENT[langKey];
    if (!sample) return false;
    if (state.meta.name !== sample.meta.name || state.meta.role !== sample.meta.role) {
      return false;
    }
    for (const item of BMY_SCHEMA) {
      if ((state.elements[item.id] || '').trim() !== (sample.elements[item.id] || '').trim()) {
        return false;
      }
    }
    return true;
  }

  /* Apply UI Translations across DOM */
  function applyTranslationsToDOM() {
    const lang = (state.settings && state.settings.lang) || 'id';
    document.documentElement.lang = lang;

    const canvas = document.getElementById('bmy-canvas');
    if (canvas) canvas.setAttribute('data-lang', lang);

    // 1. Static [data-i18n] nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    // 2. Input Placeholders
    document.getElementById('meta-name').placeholder = t('ph_name');
    document.getElementById('meta-role').placeholder = t('ph_role');

    // 3. Guide Modal Body
    const guideBody = document.getElementById('guide-body-content');
    if (guideBody) guideBody.innerHTML = t('guide_html');

    // 4. Sidebar 9 Element Subtitles & Textarea Placeholders
    BMY_SCHEMA.forEach((item) => {
      const subText = getItemSubtitle(item);
      const hintEl = document.getElementById(`hint-${item.id}`);
      if (hintEl) hintEl.textContent = subText;

      const textarea = document.getElementById(`field-${item.id}`);
      if (textarea) {
        textarea.placeholder = `${t('ph_textarea_prefix')} ${item.title} ${t('ph_textarea_suffix')}`;
      }

      // 5. Canvas Card Subtitles & Quick-Add Buttons
      const cardSubEl = document.getElementById(`card-sub-${item.id}`);
      if (cardSubEl) cardSubEl.textContent = subText;
    });

    document.querySelectorAll('.btn-add-point span').forEach((span) => {
      span.textContent = t('btn_add_point');
    });

    // 6. Active state on Language Toggle Pills
    document.querySelectorAll('#lang-toggle .nav-pill-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* ----------------------------------------------------------------------
     4. DYNAMIC SYMMETRIC PROPORTIONS & PAGE RATIO ENGINE
     ---------------------------------------------------------------------- */
  function getTextWeight(id) {
    const raw = state.elements[id] || '';
    const lines = raw.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    const charLen = lines.reduce((acc, l) => acc + l.length, 0);
    return 45 + charLen + (lines.length * 22);
  }

  function recalculateSymmetricProportions() {
    const canvas = document.getElementById('bmy-canvas');
    if (!canvas) return;

    const wPartners = getTextWeight('partners');
    const wSegments = getTextWeight('segments');
    const wValue = getTextWeight('value');

    const wAct = getTextWeight('activities');
    const wRes = getTextWeight('resources');
    const wRel = getTextWeight('relationships');
    const wChan = getTextWeight('channels');

    const outerAvg = (wPartners + wSegments) / 2;
    const stackAvg = ((wAct + wRes) + (wRel + wChan)) / 2;
    const centerWeight = wValue;

    const total = (outerAvg * 2) + (stackAvg * 2) + centerWeight || 1;
    let rOuter = (outerAvg / total) * 5;
    let rStack = (stackAvg / total) * 5;
    let rCenter = (centerWeight / total) * 5;

    rOuter = Math.min(Math.max(rOuter, 0.78), 1.15);
    rStack = Math.min(Math.max(rStack, 1.05), 1.40);
    rCenter = Math.min(Math.max(rCenter, 0.85), 1.25);

    canvas.style.setProperty('--col-outer', `${rOuter.toFixed(3)}fr`);
    canvas.style.setProperty('--col-stack', `${rStack.toFixed(3)}fr`);
    canvas.style.setProperty('--col-center', `${rCenter.toFixed(3)}fr`);

    const boxAct = canvas.querySelector('[data-element-box="activities"]');
    const boxRes = canvas.querySelector('[data-element-box="resources"]');
    const boxRel = canvas.querySelector('[data-element-box="relationships"]');
    const boxChan = canvas.querySelector('[data-element-box="channels"]');

    if (boxAct && boxRes) {
      boxAct.style.flexGrow = Math.max(1, Math.round((wAct / (wAct + wRes)) * 10));
      boxRes.style.flexGrow = Math.max(1, Math.round((wRes / (wAct + wRes)) * 10));
    }
    if (boxRel && boxChan) {
      boxRel.style.flexGrow = Math.max(1, Math.round((wRel / (wRel + wChan)) * 10));
      boxChan.style.flexGrow = Math.max(1, Math.round((wChan / (wRel + wChan)) * 10));
    }
  }

  function applyPageRatioDimensions() {
    const canvas = document.getElementById('bmy-canvas');
    const widthVal = state.settings.canvasWidth || 1280;
    const ratioKey = state.settings.pageRatio || 'auto';
    const ratioConfig = PAGE_RATIOS[ratioKey] || PAGE_RATIOS['auto'];

    canvas.style.width = widthVal + 'px';
    canvas.style.maxWidth = widthVal + 'px';

    if (ratioConfig.aspect) {
      const targetHeight = Math.round(widthVal / ratioConfig.aspect);
      canvas.style.minHeight = targetHeight + 'px';
    } else {
      canvas.style.minHeight = '0px';
    }
  }

  /* ----------------------------------------------------------------------
     5. PAN & ZOOM ENGINE
     ---------------------------------------------------------------------- */
  const panZoom = {
    scale: 1,
    x: 50,
    y: 35,
    isPanning: false,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    isSpaceDown: false
  };

  const stageEl = document.getElementById('preview-stage');
  const transformLayerEl = document.getElementById('canvas-transform-layer');
  const zoomTextEl = document.getElementById('zoom-level-text');

  function applyTransform() {
    transformLayerEl.style.transform = `translate(${panZoom.x}px, ${panZoom.y}px) scale(${panZoom.scale})`;
    zoomTextEl.textContent = `${Math.round(panZoom.scale * 100)}%`;
  }

  function setZoom(newScale, focalX, focalY) {
    const clampedScale = Math.min(Math.max(newScale, 0.25), 2.5);
    const rect = stageEl.getBoundingClientRect();

    const fx = focalX !== undefined ? focalX - rect.left : rect.width / 2;
    const fy = focalY !== undefined ? focalY - rect.top : rect.height / 2;

    panZoom.x = fx - ((fx - panZoom.x) / panZoom.scale) * clampedScale;
    panZoom.y = fy - ((fy - panZoom.y) / panZoom.scale) * clampedScale;
    panZoom.scale = clampedScale;

    applyTransform();
  }

  function fitCanvasToScreen() {
    const stageRect = stageEl.getBoundingClientRect();
    const canvasEl = document.getElementById('bmy-canvas');
    const canvasWidth = state.settings.canvasWidth || 1280;
    const canvasHeight = canvasEl.offsetHeight || 600;

    const padX = 80;
    const padY = 80;
    const availWidth = Math.max(stageRect.width - padX, 300);
    const availHeight = Math.max(stageRect.height - padY, 300);

    const scaleX = availWidth / canvasWidth;
    const scaleY = availHeight / canvasHeight;
    let targetScale = Math.min(scaleX, scaleY);
    targetScale = Math.min(Math.max(targetScale, 0.35), 1.15);

    panZoom.scale = targetScale;
    panZoom.x = Math.max(24, (stageRect.width - canvasWidth * targetScale) / 2);
    panZoom.y = Math.max(24, (stageRect.height - canvasHeight * targetScale) / 2);

    applyTransform();
  }

  function centerCanvas() {
    const stageRect = stageEl.getBoundingClientRect();
    const canvasWidth = state.settings.canvasWidth || 1280;
    panZoom.x = Math.max(24, (stageRect.width - canvasWidth * panZoom.scale) / 2);
    panZoom.y = 32;
    applyTransform();
  }

  function initPanZoomEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName) && !e.target.isContentEditable) {
        panZoom.isSpaceDown = true;
        stageEl.classList.add('is-panning');
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        panZoom.isSpaceDown = false;
        if (!panZoom.isPanning) stageEl.classList.remove('is-panning');
      }
    });

    stageEl.addEventListener('mousedown', (e) => {
      if (e.button === 2) return;
      const isInteractive = e.target.closest('button, input, textarea, a, .canvas-nav-toolbar, [contenteditable="true"]');
      if (isInteractive && !panZoom.isSpaceDown) return;

      panZoom.isPanning = true;
      panZoom.startX = e.clientX;
      panZoom.startY = e.clientY;
      panZoom.initialX = panZoom.x;
      panZoom.initialY = panZoom.y;
      stageEl.classList.add('is-panning');
    });

    window.addEventListener('mousemove', (e) => {
      if (!panZoom.isPanning) return;
      panZoom.x = panZoom.initialX + (e.clientX - panZoom.startX);
      panZoom.y = panZoom.initialY + (e.clientY - panZoom.startY);
      applyTransform();
    });

    window.addEventListener('mouseup', () => {
      if (panZoom.isPanning) {
        panZoom.isPanning = false;
        if (!panZoom.isSpaceDown) stageEl.classList.remove('is-panning');
      }
    });

    stageEl.addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.08 : 0.92;
        setZoom(panZoom.scale * factor, e.clientX, e.clientY);
      } else {
        panZoom.x -= e.deltaX;
        panZoom.y -= e.deltaY;
        applyTransform();
      }
    }, { passive: false });

    document.getElementById('btn-zoom-in').addEventListener('click', () => setZoom(panZoom.scale + 0.1));
    document.getElementById('btn-zoom-out').addEventListener('click', () => setZoom(panZoom.scale - 0.1));
    document.getElementById('btn-zoom-reset').addEventListener('click', () => setZoom(1));
    document.getElementById('btn-zoom-fit').addEventListener('click', fitCanvasToScreen);
    document.getElementById('btn-zoom-center').addEventListener('click', centerCanvas);
  }

  /* ----------------------------------------------------------------------
     6. RESIZABLE & COLLAPSIBLE SIDEBAR
     ---------------------------------------------------------------------- */
  const sidebarEl = document.getElementById('app-sidebar');
  const resizerEl = document.getElementById('sidebar-resizer');
  const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
  const btnFloatingReopen = document.getElementById('btn-floating-reopen');

  function updateSidebarUI() {
    const isCollapsed = Boolean(state.settings.sidebarCollapsed);
    sidebarEl.classList.toggle('collapsed', isCollapsed);
    btnFloatingReopen.classList.toggle('visible', isCollapsed);

    btnToggleSidebar.innerHTML = isCollapsed
      ? '<i data-lucide="panel-left-open"></i>'
      : '<i data-lucide="panel-left-close"></i>';
    lucide.createIcons();

    document.documentElement.style.setProperty('--sidebar-width', (state.settings.sidebarWidth || 430) + 'px');
  }

  function toggleSidebar() {
    state.settings.sidebarCollapsed = !state.settings.sidebarCollapsed;
    updateSidebarUI();
    saveStateToStorage();
    setTimeout(centerCanvas, 260);
  }

  function initSidebarResize() {
    let isResizing = false;

    resizerEl.addEventListener('mousedown', () => {
      if (state.settings.sidebarCollapsed) return;
      isResizing = true;
      resizerEl.classList.add('is-resizing');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isResizing) return;
      let newWidth = e.clientX;
      if (newWidth < 320) newWidth = 320;
      if (newWidth > 760) newWidth = 760;

      state.settings.sidebarWidth = newWidth;
      document.documentElement.style.setProperty('--sidebar-width', newWidth + 'px');
    });

    window.addEventListener('mouseup', () => {
      if (isResizing) {
        isResizing = false;
        resizerEl.classList.remove('is-resizing');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        saveStateToStorage();
      }
    });

    btnToggleSidebar.addEventListener('click', toggleSidebar);
    btnFloatingReopen.addEventListener('click', toggleSidebar);
  }

  /* ----------------------------------------------------------------------
     7. DOM BUILDER: SIDEBAR + SYMMETRIC CANVAS TOPOLOGIES
     ---------------------------------------------------------------------- */
  function buildSidebarFields() {
    const formContainer = document.getElementById('bmy-form-fields');
    formContainer.innerHTML = '';

    BMY_SCHEMA.forEach((item) => {
      const subText = getItemSubtitle(item);
      const group = document.createElement('div');
      group.className = 'form-group';
      group.innerHTML = `
        <label class="form-label" for="field-${item.id}">
          <span class="form-label-left">
            <i data-lucide="${item.icon}"></i>
            <span>${item.title}</span>
          </span>
          <span class="badge-num">${item.num}</span>
        </label>
        <span class="form-hint" id="hint-${item.id}">${subText}</span>
        <textarea
          id="field-${item.id}"
          data-element="${item.id}"
          class="input-textarea"
          placeholder="${t('ph_textarea_prefix')} ${item.title} ${t('ph_textarea_suffix')}"
        ></textarea>
      `;
      formContainer.appendChild(group);
    });
  }

  function createCardElement(item, isWideBottom) {
    const box = document.createElement('article');
    let extraClass = '';
    if (item.accentType === 'featured') extraClass += ' box-featured';
    if (item.accentType === 'secondary') extraClass += ' box-secondary-accent';
    if (isWideBottom) extraClass += ' box-wide-bottom';

    const subText = getItemSubtitle(item);

    box.className = `canvas-box${extraClass}`;
    box.setAttribute('data-element-box', item.id);
    box.innerHTML = `
      <header class="canvas-box-header">
        <div class="canvas-box-title-wrap">
          <div class="canvas-box-title-row">
            <span class="canvas-box-icon"><i data-lucide="${item.icon}"></i></span>
            <h2 class="canvas-box-title">${item.title}</h2>
          </div>
          <span class="canvas-box-subtitle" id="card-sub-${item.id}">${subText}</span>
        </div>
        <span class="canvas-box-number">${item.num}</span>
      </header>
      <ul class="canvas-bullet-list" id="preview-list-${item.id}"></ul>
      <div class="card-quick-actions">
        <button type="button" class="btn-add-point" data-add-for="${item.id}">
          <i data-lucide="plus"></i>
          <span>${t('btn_add_point')}</span>
        </button>
      </div>
    `;
    return box;
  }

  function buildCanvasGridTopology(mode) {
    const root = document.getElementById('canvas-grid-root');
    root.innerHTML = '';

    const findSchema = (id) => BMY_SCHEMA.find(i => i.id === id);

    if (mode === 'bento-symmetric') {
      const row1 = document.createElement('div');
      row1.className = 'bento-row-3';
      row1.appendChild(createCardElement(findSchema('partners'), false));
      row1.appendChild(createCardElement(findSchema('value'), false));
      row1.appendChild(createCardElement(findSchema('segments'), false));

      const row2 = document.createElement('div');
      row2.className = 'bento-row-4';
      row2.appendChild(createCardElement(findSchema('activities'), false));
      row2.appendChild(createCardElement(findSchema('resources'), false));
      row2.appendChild(createCardElement(findSchema('relationships'), false));
      row2.appendChild(createCardElement(findSchema('channels'), false));

      const row3 = document.createElement('div');
      row3.className = 'bento-row-2';
      row3.appendChild(createCardElement(findSchema('costs'), true));
      row3.appendChild(createCardElement(findSchema('revenues'), true));

      root.appendChild(row1);
      root.appendChild(row2);
      root.appendChild(row3);
    } else {
      const upperGrid = document.createElement('div');
      upperGrid.className = 'bmy-upper-grid';

      const col1 = document.createElement('div');
      col1.className = 'bmy-col bmy-col-single';
      col1.appendChild(createCardElement(findSchema('partners'), false));

      const col2 = document.createElement('div');
      col2.className = 'bmy-col bmy-col-stacked';
      col2.appendChild(createCardElement(findSchema('activities'), false));
      col2.appendChild(createCardElement(findSchema('resources'), false));

      const col3 = document.createElement('div');
      col3.className = 'bmy-col bmy-col-single';
      col3.appendChild(createCardElement(findSchema('value'), false));

      const col4 = document.createElement('div');
      col4.className = 'bmy-col bmy-col-stacked';
      col4.appendChild(createCardElement(findSchema('relationships'), false));
      col4.appendChild(createCardElement(findSchema('channels'), false));

      const col5 = document.createElement('div');
      col5.className = 'bmy-col bmy-col-single';
      col5.appendChild(createCardElement(findSchema('segments'), false));

      upperGrid.appendChild(col1);
      upperGrid.appendChild(col2);
      upperGrid.appendChild(col3);
      upperGrid.appendChild(col4);
      upperGrid.appendChild(col5);

      const lowerGrid = document.createElement('div');
      lowerGrid.className = 'bmy-lower-grid';
      lowerGrid.appendChild(createCardElement(findSchema('costs'), true));
      lowerGrid.appendChild(createCardElement(findSchema('revenues'), true));

      root.appendChild(upperGrid);
      root.appendChild(lowerGrid);
    }

    currentRenderedTopology = mode;
    lucide.createIcons();
    bindCardQuickAddButtons();
  }

  function createBulletItem(text, elementId) {
    const li = document.createElement('li');
    li.className = 'canvas-bullet-item';
    li.contentEditable = 'true';
    li.spellcheck = false;
    li.textContent = text;
    if (!text.trim()) li.setAttribute('data-empty', 'true');

    li.addEventListener('input', () => {
      if (!li.textContent.trim()) {
        li.setAttribute('data-empty', 'true');
      } else {
        li.removeAttribute('data-empty');
      }
      syncCanvasToState(elementId);
    });

    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const nextLi = createBulletItem('', elementId);
        li.after(nextLi);
        nextLi.focus();
        syncCanvasToState(elementId);
      } else if (e.key === 'Backspace' && !li.textContent) {
        e.preventDefault();
        const prev = li.previousElementSibling;
        const next = li.nextElementSibling;
        li.remove();
        if (prev) {
          prev.focus();
          placeCaretAtEnd(prev);
        } else if (next) {
          next.focus();
        }
        syncCanvasToState(elementId);
      }
    });

    return li;
  }

  function placeCaretAtEnd(el) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  function syncCanvasToState(elementId) {
    const listEl = document.getElementById(`preview-list-${elementId}`);
    if (!listEl) return;
    const bullets = Array.from(listEl.querySelectorAll('.canvas-bullet-item'))
      .map(li => li.textContent.trim())
      .filter(t => t.length > 0);

    const joined = bullets.join('\n');
    state.elements[elementId] = joined;

    const textarea = document.getElementById(`field-${elementId}`);
    if (textarea && document.activeElement !== textarea) {
      textarea.value = joined;
    }

    recalculateSymmetricProportions();
    saveStateToStorage();
  }

  function bindCardQuickAddButtons() {
    document.querySelectorAll('.btn-add-point').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const elemId = btn.dataset.addFor;
        const listEl = document.getElementById(`preview-list-${elemId}`);
        const newLi = createBulletItem('', elemId);
        listEl.appendChild(newLi);
        newLi.focus();
        syncCanvasToState(elemId);
      });
    });
  }

  function bindHeaderDirectEdit() {
    const nameEl = document.getElementById('preview-name');
    nameEl.addEventListener('input', () => {
      state.meta.name = nameEl.textContent.trim();
      document.getElementById('meta-name').value = state.meta.name;
      saveStateToStorage();
    });

    const roleEl = document.getElementById('preview-role');
    roleEl.addEventListener('input', () => {
      state.meta.role = roleEl.textContent.trim();
      document.getElementById('meta-role').value = state.meta.role;
      saveStateToStorage();
    });
  }

  /* ----------------------------------------------------------------------
     8. RENDER & SYNC
     ---------------------------------------------------------------------- */
  function syncFormFromState() {
    document.getElementById('meta-name').value = state.meta.name || '';
    document.getElementById('meta-role').value = state.meta.role || '';
    document.getElementById('meta-date').value = state.meta.date || '';

    BMY_SCHEMA.forEach((item) => {
      const textarea = document.getElementById(`field-${item.id}`);
      if (textarea) textarea.value = state.elements[item.id] || '';
    });

    const pageRatio = state.settings.pageRatio || 'auto';
    document.querySelectorAll('#page-ratio-selector .segment-btn, #quick-ratio-toggle .nav-pill-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.ratio === pageRatio);
    });

    const layoutMode = state.settings.layoutMode || 'smart-9box';
    document.querySelectorAll('#layout-mode-selector .segment-btn, #quick-layout-toggle .nav-pill-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.mode === layoutMode);
    });

    const pSpacing = state.settings.pointSpacing || 'tight';
    document.querySelectorAll('#point-spacing-selector .segment-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.spacing === pSpacing);
    });

    const bstyle = state.settings.bulletStyle || 'minimal';
    document.querySelectorAll('#bullet-style-selector .segment-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.bstyle === bstyle);
    });

    const widthVal = state.settings.canvasWidth || 1280;
    document.getElementById('input-custom-width').value = widthVal;
    document.querySelectorAll('#canvas-width-presets .segment-btn').forEach((btn) => {
      btn.classList.toggle('active', parseInt(btn.dataset.width, 10) === widthVal);
    });

    const minH = state.settings.boxMinHeight || 0;
    document.getElementById('range-box-min-height').value = minH;
    document.getElementById('badge-min-height').textContent = minH === 0 ? 'Auto' : minH + 'px';

    document.querySelectorAll('#density-selector .segment-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.density === state.settings.density);
    });

    document.getElementById('toggle-wide-multicol').checked = Boolean(state.settings.wideMulticol);
    document.getElementById('toggle-numbers').checked = Boolean(state.settings.showNumbers);
    document.getElementById('toggle-icons').checked = Boolean(state.settings.showIcons);

    document.querySelectorAll('#theme-preset-grid .theme-card').forEach((card) => {
      card.classList.toggle('active', card.dataset.theme === state.settings.theme);
    });

    const c = state.settings.customColors;
    document.getElementById('color-canvas-bg').value = c.canvasBg;
    document.getElementById('hex-canvas-bg').textContent = c.canvasBg;
    document.getElementById('color-card-bg').value = c.cardBg;
    document.getElementById('hex-card-bg').textContent = c.cardBg;
    document.getElementById('color-accent').value = c.accentColor;
    document.getElementById('hex-accent').textContent = c.accentColor;
    document.getElementById('color-border').value = c.borderColor;
    document.getElementById('hex-border').textContent = c.borderColor;

    applyTranslationsToDOM();
    updateSidebarUI();
  }

  function renderCanvasPreview() {
    const canvas = document.getElementById('bmy-canvas');
    const mode = state.settings.layoutMode || 'smart-9box';

    if (currentRenderedTopology !== mode) {
      buildCanvasGridTopology(mode);
    }

    if (document.activeElement !== document.getElementById('preview-name')) {
      document.getElementById('preview-name').textContent = state.meta.name.trim() || t('default_name');
    }
    if (document.activeElement !== document.getElementById('preview-role')) {
      document.getElementById('preview-role').textContent = state.meta.role.trim() || t('default_role');
    }
    document.getElementById('preview-date').textContent = state.meta.date.trim() || '-';

    BMY_SCHEMA.forEach((item) => {
      const listEl = document.getElementById(`preview-list-${item.id}`);
      if (!listEl) return;
      const isFocusedInside = listEl.contains(document.activeElement);

      if (!isFocusedInside) {
        const rawText = state.elements[item.id] || '';
        const lines = rawText
          .split(/\r?\n/)
          .map((line) => line.replace(/^[-*•]\s*/, '').trim())
          .filter((line) => line.length > 0);

        listEl.innerHTML = '';
        if (lines.length === 0) {
          listEl.appendChild(createBulletItem('', item.id));
        } else {
          lines.forEach((lineText) => {
            listEl.appendChild(createBulletItem(lineText, item.id));
          });
        }
      }
    });

    const minH = (state.settings.boxMinHeight || 0) + 'px';
    canvas.style.setProperty('--user-min-h', minH);

    canvas.setAttribute('data-lang', state.settings.lang || 'id');
    canvas.setAttribute('data-ratio', state.settings.pageRatio || 'auto');
    canvas.setAttribute('data-layout', mode);
    canvas.setAttribute('data-spacing', state.settings.pointSpacing || 'tight');
    canvas.setAttribute('data-bstyle', state.settings.bulletStyle || 'minimal');
    canvas.setAttribute('data-wide-multicol', String(Boolean(state.settings.wideMulticol)));
    canvas.setAttribute('data-density', state.settings.density || 'normal');
    canvas.setAttribute('data-show-numbers', String(state.settings.showNumbers));
    canvas.setAttribute('data-show-icons', String(state.settings.showIcons));
    canvas.setAttribute('data-theme', state.settings.theme);

    applyPageRatioDimensions();
    recalculateSymmetricProportions();

    // Apply Theme Colors
    const preset = THEME_PRESETS[state.settings.theme] || THEME_PRESETS['modern-tech'];
    const custom = state.settings.customColors;

    canvas.style.setProperty('--c-bg', custom.canvasBg || preset.canvasBg);
    canvas.style.setProperty('--c-card', custom.cardBg || preset.cardBg);
    canvas.style.setProperty('--c-accent', custom.accentColor || preset.accentColor);
    canvas.style.setProperty('--c-border', custom.borderColor || preset.borderColor);

    const isDarkCard = getLuminance(custom.cardBg || preset.cardBg) < 0.35;
    canvas.style.setProperty('--c-text', isDarkCard ? '#F1F5F9' : preset.textColor);
    canvas.style.setProperty('--c-muted', isDarkCard ? '#94A3B8' : preset.mutedColor);
    canvas.style.setProperty('--c-subcard-bg', isDarkCard ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.025)');
    canvas.style.setProperty('--c-subcard-border', isDarkCard ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.08)');
    canvas.style.setProperty('--c-accent-secondary', preset.secondaryAccent);
    canvas.style.setProperty('--c-radius', preset.radius);
    canvas.style.setProperty('--c-border-width', preset.borderWidth);
  }

  function getLuminance(hex) {
    const clean = hex.replace('#', '');
    if (clean.length !== 6) return 1;
    const r = parseInt(clean.substring(0, 2), 16) / 255;
    const g = parseInt(clean.substring(2, 4), 16) / 255;
    const b = parseInt(clean.substring(4, 6), 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  /* ----------------------------------------------------------------------
     9. EVENT BINDINGS
     ---------------------------------------------------------------------- */
  function bindEvents() {
    // Language Switcher (ID | EN)
    document.querySelectorAll('#lang-toggle .nav-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        const oldLang = state.settings.lang || 'id';
        if (newLang === oldLang) return;

        // If the canvas is currently holding unmodified sample text, auto-translate the sample content!
        if (isContentMatchingSample(oldLang)) {
          const nextSample = SAMPLE_CONTENT[newLang];
          state.meta.name = nextSample.meta.name;
          state.meta.role = nextSample.meta.role;
          state.elements = JSON.parse(JSON.stringify(nextSample.elements));
        }

        state.settings.lang = newLang;
        syncFormFromState();
        renderCanvasPreview();
        saveStateToStorage();
        showToast(t('toast_lang'));
      });
    });

    // Sidebar Tabs
    document.querySelectorAll('.sidebar-tabs .tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-tabs .tab-btn').forEach((b) => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });

    // Metadata
    ['name', 'role', 'date'].forEach((k) => {
      document.getElementById(`meta-${k}`).addEventListener('input', (e) => {
        state.meta[k] = e.target.value;
        renderCanvasPreview();
        saveStateToStorage();
      });
    });

    // 9 Elements Textareas
    document.getElementById('bmy-form-fields').addEventListener('input', (e) => {
      if (e.target && e.target.matches('textarea[data-element]')) {
        const elId = e.target.dataset.element;
        state.elements[elId] = e.target.value;
        renderCanvasPreview();
        saveStateToStorage();
      }
    });

    // Page Ratio Switcher
    const handleRatioChange = (ratio) => {
      state.settings.pageRatio = ratio;
      syncFormFromState();
      renderCanvasPreview();
      saveStateToStorage();
      setTimeout(fitCanvasToScreen, 60);
      const cfg = PAGE_RATIOS[ratio] || PAGE_RATIOS['auto'];
      showToast(`${t('toast_ratio')} ${cfg.label}`);
    };

    document.querySelectorAll('#page-ratio-selector .segment-btn, #quick-ratio-toggle .nav-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => handleRatioChange(btn.dataset.ratio));
    });

    // Layout Mode Switcher
    const handleLayoutChange = (mode) => {
      state.settings.layoutMode = mode;
      syncFormFromState();
      renderCanvasPreview();
      saveStateToStorage();
      setTimeout(fitCanvasToScreen, 60);
      const labelMap = {
        'smart-9box': t('toast_layout_smart'),
        'bento-symmetric': t('toast_layout_bento'),
        'classic-equal': t('toast_layout_equal')
      };
      showToast(labelMap[mode]);
    };

    document.querySelectorAll('#layout-mode-selector .segment-btn, #quick-layout-toggle .nav-pill-btn').forEach((btn) => {
      btn.addEventListener('click', () => handleLayoutChange(btn.dataset.mode));
    });

    // Point Spacing Switcher
    document.querySelectorAll('#point-spacing-selector .segment-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.settings.pointSpacing = btn.dataset.spacing;
        syncFormFromState();
        renderCanvasPreview();
        saveStateToStorage();
      });
    });

    // Bullet Visual Style Switcher
    document.querySelectorAll('#bullet-style-selector .segment-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.settings.bulletStyle = btn.dataset.bstyle;
        syncFormFromState();
        renderCanvasPreview();
        saveStateToStorage();
      });
    });

    // Width Presets
    document.querySelectorAll('#canvas-width-presets .segment-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const w = parseInt(btn.dataset.width, 10);
        state.settings.canvasWidth = w;
        syncFormFromState();
        renderCanvasPreview();
        saveStateToStorage();
        setTimeout(fitCanvasToScreen, 60);
      });
    });

    document.getElementById('input-custom-width').addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 880) val = 880;
      if (val > 3840) val = 3840;
      state.settings.canvasWidth = val;

      document.querySelectorAll('#canvas-width-presets .segment-btn').forEach((b) => {
        b.classList.toggle('active', parseInt(b.dataset.width, 10) === val);
      });

      renderCanvasPreview();
      saveStateToStorage();
    });

    // Min-Height Slider
    const rangeMinH = document.getElementById('range-box-min-height');
    const badgeMinH = document.getElementById('badge-min-height');
    rangeMinH.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      state.settings.boxMinHeight = val;
      badgeMinH.textContent = val === 0 ? 'Auto' : val + 'px';
      renderCanvasPreview();
      saveStateToStorage();
    });

    // Density Selector
    document.querySelectorAll('#density-selector .segment-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const d = btn.dataset.density;
        state.settings.density = d;
        syncFormFromState();
        renderCanvasPreview();
        saveStateToStorage();
        showToast(`${t('toast_density')} ${d.toUpperCase()}`);
      });
    });

    // Checkboxes
    document.getElementById('toggle-wide-multicol').addEventListener('change', (e) => {
      state.settings.wideMulticol = e.target.checked;
      renderCanvasPreview();
      saveStateToStorage();
    });

    document.getElementById('toggle-numbers').addEventListener('change', (e) => {
      state.settings.showNumbers = e.target.checked;
      renderCanvasPreview();
      saveStateToStorage();
    });

    document.getElementById('toggle-icons').addEventListener('change', (e) => {
      state.settings.showIcons = e.target.checked;
      renderCanvasPreview();
      saveStateToStorage();
    });

    // Themes
    document.querySelectorAll('#theme-preset-grid .theme-card').forEach((card) => {
      card.addEventListener('click', () => {
        const themeKey = card.dataset.theme;
        const preset = THEME_PRESETS[themeKey];
        if (!preset) return;

        state.settings.theme = themeKey;
        state.settings.customColors = {
          canvasBg: preset.canvasBg,
          cardBg: preset.cardBg,
          accentColor: preset.accentColor,
          borderColor: preset.borderColor
        };

        syncFormFromState();
        renderCanvasPreview();
        saveStateToStorage();
        showToast(`${t('toast_theme')} ${card.querySelector('.theme-card-name').textContent}`);
      });
    });

    // Colors
    const colorMapping = [
      { inputId: 'color-canvas-bg', hexId: 'hex-canvas-bg', prop: 'canvasBg' },
      { inputId: 'color-card-bg', hexId: 'hex-card-bg', prop: 'cardBg' },
      { inputId: 'color-accent', hexId: 'hex-accent', prop: 'accentColor' },
      { inputId: 'color-border', hexId: 'hex-border', prop: 'borderColor' }
    ];

    colorMapping.forEach(({ inputId, hexId, prop }) => {
      const el = document.getElementById(inputId);
      const hex = document.getElementById(hexId);
      el.addEventListener('input', (e) => {
        const val = e.target.value.toUpperCase();
        state.settings.customColors[prop] = val;
        hex.textContent = val;
        renderCanvasPreview();
        saveStateToStorage();
      });
    });

    // Guide Modal
    const modalGuide = document.getElementById('modal-guide');
    document.getElementById('btn-open-guide').addEventListener('click', () => modalGuide.classList.add('open'));
    document.getElementById('btn-close-guide').addEventListener('click', () => modalGuide.classList.remove('open'));
    modalGuide.addEventListener('click', (e) => {
      if (e.target === modalGuide) modalGuide.classList.remove('open');
    });

    // Load Sample Data (Loads in current active language!)
    document.getElementById('btn-load-sample').addEventListener('click', () => {
      const currSettings = JSON.parse(JSON.stringify(state.settings));
      const activeLang = currSettings.lang || 'id';
      state = getSampleState(activeLang);
      state.settings = currSettings;
      state.settings.boxMinHeight = 0;
      syncFormFromState();
      renderCanvasPreview();
      saveStateToStorage();
      setTimeout(fitCanvasToScreen, 60);
      showToast(t('toast_sample'));
    });

    // Clear All
    const modalClear = document.getElementById('modal-clear');
    document.getElementById('btn-clear-all').addEventListener('click', () => modalClear.classList.add('open'));
    document.getElementById('btn-cancel-clear').addEventListener('click', () => modalClear.classList.remove('open'));
    document.getElementById('btn-confirm-clear').addEventListener('click', () => {
      state.meta = { name: '', role: '', date: new Date().toISOString().split('T')[0] };
      BMY_SCHEMA.forEach((item) => { state.elements[item.id] = ''; });
      syncFormFromState();
      renderCanvasPreview();
      saveStateToStorage();
      modalClear.classList.remove('open');
      showToast(t('toast_clear'));
    });

    // Export & Import
    document.getElementById('btn-export-json').addEventListener('click', exportJSON);
    const fileIn = document.getElementById('input-import-json');
    document.getElementById('btn-import-json').addEventListener('click', () => fileIn.click());
    fileIn.addEventListener('change', importJSON);

    document.getElementById('btn-export-png').addEventListener('click', exportPNG);
    document.getElementById('btn-export-pdf').addEventListener('click', exportPDF);
  }

  /* ----------------------------------------------------------------------
     10. EXPORT & UTILITIES
     ---------------------------------------------------------------------- */
  function getSafeFilename(ext) {
    const raw = (state.meta.name || 'personal-canvas')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `bmy-${raw || 'canvas'}.${ext}`;
  }

  function exportJSON() {
    const str = JSON.stringify(state, null, 2);
    const blob = new Blob([str], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = getSafeFilename('json');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(t('toast_json_export'));
  }

  function importJSON(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        if (!imported || !imported.elements) {
          throw new Error('Invalid BMY JSON schema.');
        }
        const fallback = getSampleState(state.settings.lang || 'id');
        state = {
          meta: Object.assign({}, fallback.meta, imported.meta || {}),
          elements: Object.assign({}, fallback.elements, imported.elements || {}),
          settings: Object.assign({}, fallback.settings, imported.settings || {})
        };
        syncFormFromState();
        renderCanvasPreview();
        saveStateToStorage();
        showToast(t('toast_json_import'));
      } catch (err) {
        alert('Failed to read JSON file: ' + err.message);
      } finally {
        e.target.value = '';
      }
    };
    reader.readAsText(file);
  }

  async function captureCanvasBlob(pixelRatio) {
    const canvasEl = document.getElementById('bmy-canvas');
    const prevTransform = transformLayerEl.style.transform;

    transformLayerEl.style.transform = 'none';
    canvasEl.classList.add('is-exporting');

    try {
      const bgColor = getComputedStyle(canvasEl).getPropertyValue('--c-bg').trim() || '#F8FAFC';
      const dataUrl = await window.htmlToImage.toPng(canvasEl, {
        pixelRatio: pixelRatio,
        backgroundColor: bgColor,
        cacheBust: true
      });
      return { dataUrl, bgColor, canvasEl };
    } finally {
      canvasEl.classList.remove('is-exporting');
      transformLayerEl.style.transform = prevTransform;
    }
  }

  async function exportPNG() {
    const btn = document.getElementById('btn-export-png');
    btn.disabled = true;

    try {
      const { dataUrl } = await captureCanvasBlob(3);
      const link = document.createElement('a');
      link.download = getSafeFilename('png');
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(t('toast_png_export'));
    } catch (err) {
      console.error('Export PNG failed:', err);
      alert('Failed to export PNG.');
    } finally {
      btn.disabled = false;
    }
  }

  async function exportPDF() {
    const btn = document.getElementById('btn-export-pdf');
    btn.disabled = true;

    try {
      const { dataUrl, bgColor, canvasEl } = await captureCanvasBlob(2.5);

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = 297;
      const pageHeight = 210;
      const margin = 8;
      const maxWidth = pageWidth - margin * 2;
      const maxHeight = pageHeight - margin * 2;

      const rect = canvasEl.getBoundingClientRect();
      const aspect = rect.width / rect.height;

      let renderWidth = maxWidth;
      let renderHeight = renderWidth / aspect;

      if (renderHeight > maxHeight) {
        renderHeight = maxHeight;
        renderWidth = renderHeight * aspect;
      }

      const offsetX = (pageWidth - renderWidth) / 2;
      const offsetY = (pageHeight - renderHeight) / 2;

      pdf.setFillColor(bgColor);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
      pdf.addImage(dataUrl, 'PNG', offsetX, offsetY, renderWidth, renderHeight, undefined, 'FAST');
      pdf.save(getSafeFilename('pdf'));

      showToast(t('toast_pdf_export'));
    } catch (err) {
      console.error('Export PDF failed, falling back to browser print:', err);
      window.print();
    } finally {
      btn.disabled = false;
    }
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toast');
    const text = document.getElementById('toast-text');
    text.textContent = message;
    toast.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2600);
  }

  /* ----------------------------------------------------------------------
     11. BOOTSTRAP
     ---------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    buildSidebarFields();
    bindHeaderDirectEdit();
    syncFormFromState();
    renderCanvasPreview();
    initPanZoomEvents();
    initSidebarResize();
    bindEvents();

    setTimeout(fitCanvasToScreen, 100);
  });
})();