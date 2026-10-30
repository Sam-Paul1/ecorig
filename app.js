/**
 * ECORIG - LEVEL UP RESPONSIBLY
 * Main Application Logic & Interactive Systems
 * Aligned with UN SDG 12 (Responsible Consumption and Production)
 */

// =============================================================================
// 1. DATA REPOSITORIES & CATALOG
// =============================================================================

const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Apex Verdant RX-90 Battlestation",
    category: "battlestation",
    categoryLabel: "RECYCLED FLAGSHIP PC",
    price: 1449,
    originalPrice: 2499,
    image: "./assets/hero-pc.jpg",
    grade: "Grade A+ Pristine",
    carbonSavedKg: 185,
    ewasteSavedKg: 4.8,
    stockLeft: 2,
    specs: {
      gpu: "RTX 4080 (Factory Undervolted to 280W)",
      cpu: "AMD Ryzen 7 7800X3D (8C/16T, 3D V-Cache)",
      ram: "32GB DDR5-6000MHz Kingston Fury (Recertified)",
      storage: "2TB Gen4 NVMe SSD (100% Health Audited)",
      cooling: "Custom Emerald Closed-Loop with Bio-Coolant",
      psu: "850W Seasonic 80+ Titanium (94% Efficiency Grade)"
    },
    inspectionData: {
      vrmThermals: "56°C Peak under 72h FurMark",
      solderJointScore: "99.8% Integrity (AOI X-Ray Scanned)",
      noiseLevel: "28.4 dBA Silent Acoustics",
      packaging: "100% Mycelium Mushroom Foam"
    },
    description: "Our flagship gaming battlestation engineered to deliver 200+ FPS in modern 4K titles. Built around recertified silicon and encased in an anodized obsidian chassis with bio-fluid liquid cooling. Prevents 185kg of manufacturing carbon."
  },
  {
    id: 2,
    title: "CyberOnyx Resurrected Next-Gen Console",
    category: "console",
    categoryLabel: "MODDED RESTORED CONSOLE",
    price: 389,
    originalPrice: 549,
    image: "./assets/console.jpg",
    grade: "Grade A+ Pristine",
    carbonSavedKg: 68,
    ewasteSavedKg: 2.1,
    stockLeft: 4,
    specs: {
      gpu: "12 TFLOP Custom RDNA 2 APU",
      thermalMod: "Direct Thermal Grizzly Kryonaut Liquid Metal",
      storage: "1TB Ultra-Fast Custom NVMe + Heatsink Expansion",
      framerate: "4K Native at up to 120Hz HDR",
      controller: "Custom Refurbished Low-Latency Controller with Hall Effect Sticks"
    },
    inspectionData: {
      vrmThermals: "51°C under Horizon Forbidden West 4K",
      solderJointScore: "100% APU Ball Grid Reflow Verified",
      noiseLevel: "24.1 dBA Whisper Quiet",
      packaging: "Unbleached Recycled Cardboard & Hemp Sleeve"
    },
    description: "Factory recertified next-gen console saved from RMA returns. Upgraded with high-durability Hall-Effect analog sticks (zero stick drift guarantee) and liquid metal re-application for zero thermal throttling."
  },
  {
    id: 3,
    title: "Phoenix Elite RTX 4090 Recertified Edition",
    category: "silicon",
    categoryLabel: "DISCRETE SILICON GPU",
    price: 1199,
    originalPrice: 1799,
    image: "./assets/gpu.jpg",
    grade: "Grade A+ Pristine",
    carbonSavedKg: 92,
    ewasteSavedKg: 1.4,
    stockLeft: 3,
    specs: {
      vram: "24GB GDDR6X Micron Modules (Stress Tested)",
      cooling: "Triple 100mm Axial Fans with Vapor Chamber",
      powerProfile: "Pre-flashed EcoRig Undervolt BIOS (295W Peak)",
      benchmark: "Time Spy Extreme: 19,420 Points (99.6% New Parity)",
      outputs: "3x DisplayPort 1.4a, 1x HDMI 2.1a"
    },
    inspectionData: {
      vrmThermals: "62°C Hotspot under full benchmark load",
      solderJointScore: "99.9% Memory traces micro-soldered",
      noiseLevel: "31.2 dBA under 100% compute load",
      packaging: "Anti-static biodegradable cornstarch sleeve"
    },
    description: "The holy grail of graphics performance salvaged from machine learning dev labs. Thoroughly ultrasonically scrubbed, re-padded with Gelid Extreme pads, and flashed with an energy-efficient undervolt BIOS."
  },
  {
    id: 4,
    title: "Verdant Pulse Wireless Pro Peripheral Suite",
    category: "peripherals",
    categoryLabel: "CIRCULAR GAMING GEAR",
    price: 159,
    originalPrice: 289,
    image: "./assets/gear.jpg",
    grade: "Grade A Mint",
    carbonSavedKg: 24,
    ewasteSavedKg: 0.9,
    stockLeft: 6,
    specs: {
      keyboard: "CNC 65% Hot-Swap with Eco-Lubed Linear Switches",
      mouse: "54g Ultra-Light Wireless with PixArt 3395 Sensor",
      headset: "50mm Planar Magnetic Drivers with Bamboo Stand",
      batteryLife: "140 Hours on Low-Power 2.4GHz Wireless",
      materials: "Chassis molded from 78% recycled oceanic plastics"
    },
    inspectionData: {
      switchDurability: "Tested for 80M clicks with zero chattering",
      batteryHealth: "100% capacity LiPo cells certified",
      cableSheath: "Braided natural cotton and hemp cables",
      packaging: "Molded pulp compostable trays"
    },
    description: "A complete professional esports peripheral suite constructed with certified recycled chassis materials. Tactile bliss, low latency, and zero guilt."
  },
  {
    id: 5,
    title: "Valkyrie Precision RTX 4070 Ti Super Battlestation",
    category: "battlestation",
    categoryLabel: "COMPETITIVE ESPORTS RIG",
    price: 1089,
    originalPrice: 1749,
    image: "./assets/hero-pc.jpg",
    grade: "Grade A+ Pristine",
    carbonSavedKg: 142,
    ewasteSavedKg: 3.9,
    stockLeft: 3,
    specs: {
      gpu: "RTX 4070 Ti Super 16GB",
      cpu: "Intel Core i7-13700KF (Undervolted -75mV)",
      ram: "32GB DDR5-5600 Dual Channel",
      storage: "1TB M.2 PCIe 4.0 SSD (Read 7000 MB/s)",
      power: "750W 80+ Gold Fully Modular PSU",
      os: "Pre-installed Debloated OS with Energy-Star Sleep Profiles"
    },
    inspectionData: {
      vrmThermals: "54°C Average gaming thermals",
      solderJointScore: "99.7% AOI verified PCB traces",
      noiseLevel: "26.5 dBA in quiet mode",
      packaging: "Mushroom mycelium molded inserts"
    },
    description: "Engineered specifically for competitive 240Hz 1440p gaming. Features calibrated power envelopes that deliver silky smooth frame rates while drawing 65 fewer watts from the wall than off-the-shelf retail systems."
  },
  {
    id: 6,
    title: "Titan Studio Recertified Workstation & Gaming PC",
    category: "battlestation",
    categoryLabel: "PRO CREATOR & STREAMER RIG",
    price: 1699,
    originalPrice: 2899,
    image: "./assets/hero-pc.jpg",
    grade: "Grade A+ Pristine",
    carbonSavedKg: 215,
    ewasteSavedKg: 5.6,
    stockLeft: 2,
    specs: {
      gpu: "RTX 4080 Super 16GB",
      cpu: "AMD Ryzen 9 7900X (12 Cores / 24 Threads)",
      ram: "64GB DDR5 ECC-Capable Memory",
      storage: "4TB High-Endurance NVMe Array",
      chassis: "Brushed Aluminum Acoustic-Dampened Tower",
      psu: "1000W 80+ Platinum High-Efficiency Unit"
    },
    inspectionData: {
      vrmThermals: "58°C under continuous Blender 3D render loop",
      solderJointScore: "99.9% Multilayer PCB scan",
      noiseLevel: "25.8 dBA Studio Quiet",
      packaging: "Zero-plastic heavy duty recycled unboxing"
    },
    description: "A powerhouse machine for Unreal Engine 5 developers, 4K streamers, and extreme enthusiasts. Rescued from enterprise animation studios and recalibrated for 10+ years of reliable high-output life."
  }
];

// Trade-In Database Models and Valuations
const TRADE_IN_MODELS = {
  gpu: [
    { name: "NVIDIA GeForce RTX 3080 / 3080 Ti", baseValue: 320, ewasteKg: 1.4, carbonKg: 78, rareMetalsG: 14.5 },
    { name: "NVIDIA GeForce RTX 3070 / 3070 Ti", baseValue: 240, ewasteKg: 1.2, carbonKg: 64, rareMetalsG: 11.2 },
    { name: "NVIDIA GeForce RTX 2080 / 2080 Super", baseValue: 160, ewasteKg: 1.1, carbonKg: 52, rareMetalsG: 9.8 },
    { name: "NVIDIA GeForce GTX 1080 / 1080 Ti", baseValue: 95, ewasteKg: 1.0, carbonKg: 42, rareMetalsG: 8.5 },
    { name: "AMD Radeon RX 6800 XT / 6900 XT", baseValue: 290, ewasteKg: 1.3, carbonKg: 72, rareMetalsG: 13.0 },
    { name: "AMD Radeon RX 6700 XT", baseValue: 180, ewasteKg: 1.1, carbonKg: 55, rareMetalsG: 10.2 }
  ],
  desktop: [
    { name: "Custom Desktop (Intel 12th/13th Gen + Dedicated GPU)", baseValue: 460, ewasteKg: 8.5, carbonKg: 180, rareMetalsG: 34.0 },
    { name: "Custom Desktop (AMD Ryzen 5000/7000 Series)", baseValue: 420, ewasteKg: 8.0, carbonKg: 165, rareMetalsG: 31.5 },
    { name: "Older Desktop (Intel 8th-10th Gen or Ryzen 1000-3000)", baseValue: 220, ewasteKg: 7.2, carbonKg: 130, rareMetalsG: 26.0 },
    { name: "Decommissioned Office Tower (Core i5 / i7)", baseValue: 110, ewasteKg: 6.5, carbonKg: 95, rareMetalsG: 19.0 }
  ],
  console: [
    { name: "PlayStation 5 (Disc or Digital Edition)", baseValue: 280, ewasteKg: 4.5, carbonKg: 68, rareMetalsG: 16.2 },
    { name: "Xbox Series X", baseValue: 275, ewasteKg: 4.4, carbonKg: 66, rareMetalsG: 15.8 },
    { name: "PlayStation 4 Pro / Xbox One X", baseValue: 120, ewasteKg: 3.8, carbonKg: 45, rareMetalsG: 12.0 },
    { name: "Nintendo Switch OLED Model", baseValue: 150, ewasteKg: 1.2, carbonKg: 32, rareMetalsG: 7.5 }
  ],
  laptop: [
    { name: "High-End Gaming Laptop (RTX 3070 / 3080)", baseValue: 410, ewasteKg: 2.8, carbonKg: 125, rareMetalsG: 22.0 },
    { name: "Mid-Range Gaming Laptop (RTX 3050 / 3060 / GTX 1660 Ti)", baseValue: 250, ewasteKg: 2.5, carbonKg: 95, rareMetalsG: 18.0 },
    { name: "Ultralight Working Laptop (MacBook Pro / ThinkPad)", baseValue: 310, ewasteKg: 2.0, carbonKg: 88, rareMetalsG: 17.5 }
  ],
  peripherals: [
    { name: "Mechanical Gaming Keyboard & Wireless Mouse Combo", baseValue: 55, ewasteKg: 1.5, carbonKg: 22, rareMetalsG: 4.2 },
    { name: "Gaming Monitor (144Hz - 240Hz 1440p / 4K)", baseValue: 130, ewasteKg: 6.2, carbonKg: 74, rareMetalsG: 15.0 },
    { name: "VR Headset Kit (Oculus Quest 2 / Valve Index)", baseValue: 145, ewasteKg: 2.1, carbonKg: 48, rareMetalsG: 9.0 }
  ]
};

// Comparison Data
const COMPARISON_DATA = {
  battlestation: {
    title: "High-End Gaming PC (4K / 144Hz Tier)",
    brandNew: {
      carbon: "1,240 kg CO₂",
      carbonBar: 100,
      minedMetals: "1.8 kg Virgin Ore (Lithium, Gold, Copper)",
      minedBar: 95,
      waterUsage: "48,000 Liters (Silicon Foundry Scrubbing)",
      waterBar: 90,
      packagingWaste: "4.2 kg Non-Biodegradable Expanded Polystyrene",
      price: "$2,499.00"
    },
    ecorig: {
      carbon: "128 kg CO₂ (Recertification & Logistics Only)",
      carbonBar: 12,
      minedMetals: "0.0 kg Virgin Mining (100% Recirculated Silicon)",
      minedBar: 4,
      waterUsage: "420 Liters (Ultrasonic Closed-Loop Bath)",
      waterBar: 6,
      packagingWaste: "0.0 kg (100% Backyard Compostable Mycelium)",
      price: "$1,449.00"
    }
  },
  gpu: {
    title: "Flagship GPU (NVIDIA RTX 4080 Class)",
    brandNew: {
      carbon: "385 kg CO₂ (TSMC 4N Wafer Etching)",
      carbonBar: 100,
      minedMetals: "420g High-Grade Copper & Neodymium",
      minedBar: 90,
      waterUsage: "14,500 Liters Ultrapure Water",
      waterBar: 85,
      packagingWaste: "1.8 kg Plastic Blister Clamshells",
      price: "$1,199.00"
    },
    ecorig: {
      carbon: "34 kg CO₂ (Component Re-work & Testing)",
      carbonBar: 9,
      minedMetals: "0g Virgin Extraction (Salvaged VRMs & Caps)",
      minedBar: 3,
      waterUsage: "65 Liters (Closed Circuit Wash)",
      waterBar: 4,
      packagingWaste: "0.0 kg (Anti-Static Cornstarch Fiber)",
      price: "$789.00"
    }
  },
  console: {
    title: "Next-Gen 4K 120Hz Home Console",
    brandNew: {
      carbon: "490 kg CO₂ (Casing Injection & Silicon Die)",
      carbonBar: 100,
      minedMetals: "850g Heavy Metallurgical Compounds",
      minedBar: 88,
      waterUsage: "19,200 Liters Industrial Fabrication",
      waterBar: 80,
      packagingWaste: "2.4 kg Bleached Polyethylene Bags",
      price: "$549.00"
    },
    ecorig: {
      carbon: "42 kg CO₂ (Deep Clean, Mod & Recertification)",
      carbonBar: 11,
      minedMetals: "0g Mining (Enclosure Restored & Polished)",
      minedBar: 2,
      waterUsage: "80 Liters Recycled Wash Water",
      waterBar: 5,
      packagingWaste: "0.0 kg (Unbleached Hemp Paper & Jute Tie)",
      price: "$389.00"
    }
  }
};

// =============================================================================
// 2. AUDIO SYNTHESIZER (NO EXTERNAL ASSETS NEEDED)
// =============================================================================

class SoundFX {
  constructor() {
    this.enabled = true;
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.04);
    } catch (e) {
      // Audio context policy
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.08); // C#
      osc.frequency.setValueAtTime(659.25, now + 0.16); // E
      osc.frequency.setValueAtTime(880, now + 0.24); // A

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(now + 0.45);
    } catch (e) {}
  }

  toggle() {
    this.enabled = !this.enabled;
    const soundIcon = document.getElementById("soundIcon");
    if (soundIcon) {
      soundIcon.className = this.enabled ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    }
    return this.enabled;
  }
}

// =============================================================================
// 3. MAIN APPLICATION CONTROLLER
// =============================================================================

class EcoRigApp {
  constructor() {
    this.sfx = new SoundFX();
    this.cart = [];
    this.currentFilter = "all";
    this.appliedVoucher = null;
    this.currentTradeInQuote = null;
    this.ecoModeActive = false;
    this.pledgeSigned = false;

    // Initialize application on DOM ready
    window.addEventListener("DOMContentLoaded", () => this.init());
  }

  init() {
    this.populateModelsDropdown("gpu");
    this.calculateTradeIn();
    this.renderProducts();
    this.renderComparison("battlestation");
    this.startDropCountdown();
    this.startLiveImpactTickers();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Sound toggle
    const soundToggle = document.getElementById("soundToggle");
    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        const state = this.sfx.toggle();
        this.showToast(state ? "Cyber SFX Enabled" : "SFX Muted", "fa-volume-high");
      });
    }

    // Eco Mode OLED toggle
    const ecoModeToggle = document.getElementById("ecoModeToggle");
    if (ecoModeToggle) {
      ecoModeToggle.addEventListener("click", () => this.toggleEcoMode());
    }

    // Cart trigger
    const cartTrigger = document.getElementById("cartTrigger");
    if (cartTrigger) {
      cartTrigger.addEventListener("click", () => this.toggleCart(true));
    }

    // Mobile nav menu toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
        if (navLinks.classList.contains("mobile-open")) {
          navLinks.style.display = "flex";
          navLinks.style.flexDirection = "column";
          navLinks.style.position = "absolute";
          navLinks.style.top = "72px";
          navLinks.style.left = "0";
          navLinks.style.right = "0";
          navLinks.style.background = "#080c0d";
          navLinks.style.padding = "1.5rem";
          navLinks.style.borderBottom = "1px solid var(--neon-border)";
        } else {
          navLinks.style.display = "";
        }
      });
    }

    // Filter tabs
    const filterTabs = document.querySelectorAll(".filter-tab");
    filterTabs.forEach(tab => {
      tab.addEventListener("click", (e) => {
        filterTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.currentFilter = tab.getAttribute("data-filter");
        this.sfx.playClick();
        this.renderProducts();
      });
    });

    // Product search
    const productSearchInput = document.getElementById("productSearchInput");
    if (productSearchInput) {
      productSearchInput.addEventListener("input", (e) => {
        this.renderProducts(e.target.value.toLowerCase().trim());
      });
    }

    // Close modal on Escape
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeAllModals();
        this.toggleCart(false);
      }
    });

    // Navigation scroll tracking
    window.addEventListener("scroll", () => {
      const header = document.getElementById("mainHeader");
      if (header) {
        if (window.scrollY > 40) {
          header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.8)";
        } else {
          header.style.boxShadow = "none";
        }
      }
    });

    // Button click audio feedback across interactive items
    document.querySelectorAll(".btn, .ctrl-btn, .comp-btn").forEach(b => {
      b.addEventListener("click", () => this.sfx.playClick());
    });
  }

  // ===========================================================================
  // 4. LOW-POWER ECO MODE TOGGLE (SDG 12 FEATURE)
  // ===========================================================================
  toggleEcoMode() {
    this.ecoModeActive = !this.ecoModeActive;
    const body = document.body;
    const statusText = document.getElementById("ecoModeStatus");

    if (this.ecoModeActive) {
      body.classList.add("ultra-eco-mode");
      if (statusText) statusText.innerText = "ACTIVE (OLED SAVER)";
      this.showToast("Ultra Eco Mode Activated! Zero-glow deep blacks conserve OLED display wattage.", "fa-leaf");
      this.sfx.playSuccess();
    } else {
      body.classList.remove("ultra-eco-mode");
      if (statusText) statusText.innerText = "OFF";
      this.showToast("Cyber Glow Restored", "fa-bolt");
      this.sfx.playClick();
    }
  }

  // ===========================================================================
  // 5. DROPS SHOWCASE & PRODUCT RENDERING
  // ===========================================================================
  renderProducts(searchQuery = "") {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    let filtered = PRODUCTS_DATA.filter(p => {
      const matchesCategory = this.currentFilter === "all" || p.category === this.currentFilter;
      const matchesSearch = !searchQuery || 
        p.title.toLowerCase().includes(searchQuery) || 
        p.specs.gpu?.toLowerCase().includes(searchQuery) ||
        p.categoryLabel.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-satellite-dish" style="font-size: 2.5rem; color: var(--neon-primary); margin-bottom: 1rem; display: block;"></i>
          <h3>No matching certified drops found.</h3>
          <p>Try searching for RTX, Battlestation, Console, or clear your filters.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(prod => `
      <article class="product-card" id="product-${prod.id}">
        <div class="product-image-box">
          <img src="${prod.image}" alt="${prod.title}" class="product-img" loading="lazy">
          <div class="card-top-badges">
            <span class="eco-metric-chip">
              <i class="fa-solid fa-leaf"></i> -${prod.carbonSavedKg} kg CO₂
            </span>
            <span class="grade-chip">${prod.grade}</span>
          </div>
          ${prod.stockLeft <= 3 ? `
            <span class="stock-warning-badge">
              <i class="fa-solid fa-clock"></i> Only ${prod.stockLeft} Left in Drop
            </span>
          ` : ''}
        </div>

        <div class="product-card-body">
          <div class="product-category-row">
            <span>${prod.categoryLabel}</span>
            <span><i class="fa-solid fa-recycle"></i> 100% Recertified</span>
          </div>

          <h3 class="product-title">${prod.title}</h3>

          <div class="product-highlight-specs">
            ${prod.specs.gpu ? `<span class="mini-spec"><i class="fa-solid fa-microchip"></i> ${prod.specs.gpu.split('(')[0]}</span>` : ''}
            ${prod.specs.cpu ? `<span class="mini-spec"><i class="fa-solid fa-cube"></i> ${prod.specs.cpu.split('(')[0]}</span>` : ''}
            ${prod.specs.storage ? `<span class="mini-spec"><i class="fa-solid fa-hard-drive"></i> ${prod.specs.storage}</span>` : ''}
            ${prod.specs.framerate ? `<span class="mini-spec"><i class="fa-solid fa-gamepad"></i> ${prod.specs.framerate}</span>` : ''}
            ${prod.specs.keyboard ? `<span class="mini-spec"><i class="fa-solid fa-keyboard"></i> Hot-Swap 65%</span>` : ''}
          </div>

          <div class="sdg-footprint-stat">
            <i class="fa-solid fa-shield-halved"></i>
            <span>Diverts <strong>${prod.ewasteSavedKg}kg</strong> toxic e-waste from landfills</span>
          </div>

          <div class="product-card-footer">
            <div class="price-container">
              <span class="card-original-price">$${prod.originalPrice} New</span>
              <span class="card-current-price">$${prod.price}</span>
            </div>
            <div class="card-cta-group">
              <button class="btn btn-sm btn-glass" onclick="app.openProductModal(${prod.id})" title="View Full Inspection & Diagnostics">
                <i class="fa-solid fa-eye"></i> Specs
              </button>
              <button class="btn btn-sm btn-primary-neon" onclick="app.quickAdd(${prod.id})">
                <i class="fa-solid fa-basket-shopping"></i> Claim
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  // ===========================================================================
  // 6. QUICK VIEW INSPECTION MODAL
  // ===========================================================================
  openProductModal(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    this.sfx.playClick();
    const modalContent = document.getElementById("modalProductContent");
    const modalBackdrop = document.getElementById("productModal");

    modalContent.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-media-col">
          <img src="${prod.image}" alt="${prod.title}">
          
          <div style="margin-top: 1.2rem; background: rgba(0,0,0,0.5); border: 1px solid var(--border-glass); padding: 1rem; border-radius: var(--radius-md);">
            <h4 style="font-size: 0.95rem; color: var(--neon-primary); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem;">
              <i class="fa-solid fa-microscope"></i> Lab Diagnostics Audit
            </h4>
            <div style="font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.4rem; color: #cbd5e1;">
              <div><strong>Thermal Stress:</strong> ${prod.inspectionData.vrmThermals}</div>
              <div><strong>PCB Trace Integrity:</strong> ${prod.inspectionData.solderJointScore}</div>
              <div><strong>Acoustic Rating:</strong> ${prod.inspectionData.noiseLevel}</div>
              <div><strong>Eco Packaging:</strong> ${prod.inspectionData.packaging}</div>
            </div>
          </div>
        </div>

        <div class="modal-info-col">
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.6rem;">
            <span class="eco-metric-chip"><i class="fa-solid fa-leaf"></i> -${prod.carbonSavedKg} kg CO₂</span>
            <span class="grade-chip">${prod.grade}</span>
          </div>
          <h3>${prod.title}</h3>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.2rem; line-height: 1.5;">${prod.description}</p>

          <h4 style="font-size: 0.95rem; color: var(--text-bright); margin-bottom: 0.6rem;">Verified Component Specifications:</h4>
          <table class="modal-specs-table">
            ${Object.entries(prod.specs).map(([key, val]) => `
              <tr>
                <td style="text-transform: capitalize;">${key}</td>
                <td>${val}</td>
              </tr>
            `).join('')}
          </table>

          <div style="background: rgba(0, 255, 135, 0.08); border: 1px solid var(--neon-border); padding: 0.9rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">EcoRig Re-Certified Price:</span>
              <strong style="font-family: var(--font-mono); font-size: 1.6rem; color: var(--neon-primary);">$${prod.price}</strong>
              <span style="font-size: 0.8rem; color: var(--text-dim); text-decoration: line-through; margin-left: 0.5rem;">$${prod.originalPrice} New</span>
            </div>
            <button class="btn btn-primary-neon" onclick="app.quickAdd(${prod.id}); app.closeModal('productModal');">
              <i class="fa-solid fa-basket-shopping"></i> Add to Gear Bag
            </button>
          </div>

          <div style="display: flex; gap: 1rem; font-size: 0.78rem; color: var(--text-muted);">
            <span><i class="fa-solid fa-shield-heart text-neon"></i> 2-Year Full Coverage</span>
            <span><i class="fa-solid fa-arrow-rotate-left text-neon"></i> 30-Day Money Back</span>
            <span><i class="fa-solid fa-truck text-neon"></i> Zero Carbon Shipping</span>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.classList.add("open");
  }

  // ===========================================================================
  // 7. INTERACTIVE TRADE-IN & CARBON OFFSET CALCULATOR
  // ===========================================================================
  onCategoryChange() {
    const categorySelect = document.getElementById("calcCategory");
    if (!categorySelect) return;
    const cat = categorySelect.value;
    this.populateModelsDropdown(cat);
    this.calculateTradeIn();
  }

  populateModelsDropdown(category) {
    const modelSelect = document.getElementById("calcModel");
    if (!modelSelect) return;

    const list = TRADE_IN_MODELS[category] || TRADE_IN_MODELS.gpu;
    modelSelect.innerHTML = list.map((m, index) => `
      <option value="${index}">${m.name}</option>
    `).join('');
  }

  calculateTradeIn(showFeedback = false) {
    const category = document.getElementById("calcCategory")?.value || "gpu";
    const modelIndex = parseInt(document.getElementById("calcModel")?.value || "0", 10);
    const condition = document.querySelector('input[name="hardwareCondition"]:checked')?.value || "mint";
    const extraSpec = document.getElementById("calcExtraSpec")?.value || "yes";

    const list = TRADE_IN_MODELS[category] || TRADE_IN_MODELS.gpu;
    const item = list[modelIndex] || list[0];

    // Multipliers for valuation
    let conditionMultiplier = 1.0;
    if (condition === "good") conditionMultiplier = 0.82;
    if (condition === "faulty") conditionMultiplier = 0.55; // We still salvage faulty silicon!

    const boxBonusMultiplier = extraSpec === "yes" ? 1.10 : 1.0;

    const finalPayout = Math.round(item.baseValue * conditionMultiplier * boxBonusMultiplier);
    const ewasteDiverted = (item.ewasteKg * (condition === "faulty" ? 1.1 : 1.0)).toFixed(2);
    const carbonOffset = (item.carbonKg * (condition === "mint" ? 1.0 : 0.95)).toFixed(1);
    const treesEquivalent = (carbonOffset / 20.8).toFixed(1); // 1 tree absorbs ~20.8kg CO2/year
    const rareMetals = item.rareMetalsG.toFixed(1);

    // Update DOM
    const payoutEl = document.getElementById("calculatedPayout");
    const voucherEl = document.getElementById("generatedVoucher");
    const ewasteEl = document.getElementById("impactEwaste");
    const carbonEl = document.getElementById("impactCarbon");
    const treesEl = document.getElementById("impactTrees");
    const metalsEl = document.getElementById("impactMetals");

    if (payoutEl) payoutEl.innerText = `$${finalPayout}.00`;
    const voucherCode = `ECORIG-SDG12-${finalPayout}`;
    if (voucherEl) voucherEl.innerText = voucherCode;
    if (ewasteEl) ewasteEl.innerText = `${ewasteDiverted} kg`;
    if (carbonEl) carbonEl.innerText = `${carbonOffset} kg CO₂`;
    if (treesEl) treesEl.innerText = `${treesEquivalent} Trees / Yr`;
    if (metalsEl) metalsEl.innerText = `${rareMetals} g`;

    this.currentTradeInQuote = {
      payout: finalPayout,
      code: voucherCode,
      ewasteKg: parseFloat(ewasteDiverted),
      carbonKg: parseFloat(carbonOffset),
      modelName: item.name
    };

    if (showFeedback) {
      this.sfx.playSuccess();
      this.showToast(`Trade-in re-calculated: $${finalPayout} credit + ${carbonOffset}kg CO₂ saved!`, "fa-calculator");
    }
  }

  copyVoucher() {
    if (!this.currentTradeInQuote) return;
    navigator.clipboard?.writeText(this.currentTradeInQuote.code);
    this.sfx.playClick();
    this.showToast(`Voucher code "${this.currentTradeInQuote.code}" copied to clipboard!`, "fa-copy");
  }

  applyTradeInToCart() {
    if (!this.currentTradeInQuote) return;
    this.appliedVoucher = {
      code: this.currentTradeInQuote.code,
      discount: this.currentTradeInQuote.payout,
      ewasteBonus: this.currentTradeInQuote.ewasteKg
    };
    this.sfx.playSuccess();
    this.showToast(`Applied $${this.appliedVoucher.discount} credit voucher to your cart!`, "fa-tag");
    this.toggleCart(true);
    this.updateCartDrawer();
  }

  // ===========================================================================
  // 8. INTERACTIVE LIFE-CYCLE COMPARISON
  // ===========================================================================
  setComparisonTier(tier) {
    document.querySelectorAll(".comp-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tier") === tier);
    });
    this.renderComparison(tier);
  }

  renderComparison(tier) {
    const container = document.getElementById("comparisonDualGrid");
    if (!container) return;

    const data = COMPARISON_DATA[tier] || COMPARISON_DATA.battlestation;

    container.innerHTML = `
      <!-- Brand New Column -->
      <div class="comp-column brand-new">
        <div class="comp-header">
          <div>
            <span class="comp-badge"><i class="fa-solid fa-triangle-exclamation"></i> LINEAR TAKE-MAKE-WASTE</span>
            <h3 class="comp-col-title">Brand New Retail</h3>
          </div>
          <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: #f87171;">
            ${data.brandNew.price}
          </div>
        </div>

        <div class="comp-metrics-list">
          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>Manufacturing & Smelting Carbon:</span>
              <strong class="comp-metric-value">${data.brandNew.carbon}</strong>
            </div>
            <div class="comp-bar-track">
              <div class="comp-bar-fill" style="width: ${data.brandNew.carbonBar}%"></div>
            </div>
          </div>

          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>Virgin Raw Minerals & Toxic Mining:</span>
              <strong class="comp-metric-value">${data.brandNew.minedMetals}</strong>
            </div>
            <div class="comp-bar-track">
              <div class="comp-bar-fill" style="width: ${data.brandNew.minedBar}%"></div>
            </div>
          </div>

          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>Industrial Freshwater Consumed:</span>
              <strong class="comp-metric-value">${data.brandNew.waterUsage}</strong>
            </div>
            <div class="comp-bar-track">
              <div class="comp-bar-fill" style="width: ${data.brandNew.waterBar}%"></div>
            </div>
          </div>

          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>Packaging Petroleum Plastics:</span>
              <strong class="comp-metric-value">${data.brandNew.packagingWaste}</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- EcoRig Certified Column -->
      <div class="comp-column ecorig-certified">
        <div class="comp-header">
          <div>
            <span class="comp-badge"><i class="fa-solid fa-circle-check"></i> UN SDG 12 CERTIFIED CIRCULAR</span>
            <h3 class="comp-col-title">EcoRig Certified</h3>
          </div>
          <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: var(--neon-primary);">
            ${data.ecorig.price}
          </div>
        </div>

        <div class="comp-metrics-list">
          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>Refurbishment Carbon Footprint:</span>
              <strong class="comp-metric-value">${data.ecorig.carbon}</strong>
            </div>
            <div class="comp-bar-track">
              <div class="comp-bar-fill" style="width: ${data.ecorig.carbonBar}%"></div>
            </div>
          </div>

          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>Virgin Raw Minerals Extracted:</span>
              <strong class="comp-metric-value">${data.ecorig.minedMetals}</strong>
            </div>
            <div class="comp-bar-track">
              <div class="comp-bar-fill" style="width: ${data.ecorig.minedBar}%"></div>
            </div>
          </div>

          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>Closed-Loop Clean Water:</span>
              <strong class="comp-metric-value">${data.ecorig.waterUsage}</strong>
            </div>
            <div class="comp-bar-track">
              <div class="comp-bar-fill" style="width: ${data.ecorig.waterBar}%"></div>
            </div>
          </div>

          <div class="comp-metric-item">
            <div class="comp-metric-head">
              <span>100% Biodegradable Packaging:</span>
              <strong class="comp-metric-value">${data.ecorig.packagingWaste}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 9. 5-STAGE PROTOCOL STEP HIGHLIGHT
  // ===========================================================================
  activateStep(el, stepNum) {
    document.querySelectorAll(".step-card").forEach(s => s.classList.remove("active"));
    el.classList.add("active");
    this.sfx.playClick();
  }

  // ===========================================================================
  // 10. SHOPPING CART & SDG 12 CHECKOUT CERTIFICATE
  // ===========================================================================
  quickAdd(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    this.cart.push(product);
    this.sfx.playSuccess();
    this.updateCartCount();
    this.showToast(`Added ${product.title} to your EcoRig Bag!`, "fa-cart-plus");
    this.toggleCart(true);
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.sfx.playClick();
    this.updateCartCount();
    this.updateCartDrawer();
  }

  toggleCart(open) {
    const drawer = document.getElementById("cartDrawer");
    if (!drawer) return;
    if (open) {
      drawer.classList.add("open");
      this.updateCartDrawer();
    } else {
      drawer.classList.remove("open");
    }
  }

  updateCartCount() {
    const countEl = document.getElementById("cartCount");
    if (countEl) countEl.innerText = this.cart.length;
  }

  applyVoucherInput() {
    const input = document.getElementById("cartVoucherInput");
    const statusMsg = document.getElementById("voucherStatusMsg");
    if (!input || !statusMsg) return;

    const val = input.value.trim().toUpperCase();
    if (!val) {
      statusMsg.innerHTML = `<span style="color: var(--danger-accent); font-size: 0.75rem;">Please enter a voucher code.</span>`;
      return;
    }

    if (val.startsWith("ECORIG-")) {
      // Extract or compute discount
      let discountAmount = 150;
      const parts = val.split("-");
      if (parts.length >= 3 && !isNaN(parseInt(parts[2], 10))) {
        discountAmount = parseInt(parts[2], 10);
      } else if (parts.length >= 2 && !isNaN(parseInt(parts[1], 10))) {
        discountAmount = parseInt(parts[1], 10);
      }

      this.appliedVoucher = {
        code: val,
        discount: discountAmount,
        ewasteBonus: 3.5
      };
      this.sfx.playSuccess();
      statusMsg.innerHTML = `<span style="color: var(--neon-primary); font-size: 0.75rem;"><i class="fa-solid fa-check"></i> Applied $${discountAmount} Trade-In credit!</span>`;
      this.updateCartDrawer();
    } else {
      statusMsg.innerHTML = `<span style="color: var(--danger-accent); font-size: 0.75rem;">Invalid voucher. Generate one in the Trade-In Calculator.</span>`;
    }
  }

  updateCartDrawer() {
    const listEl = document.getElementById("cartItemsList");
    const subtotalEl = document.getElementById("cartSubtotal");
    const discountEl = document.getElementById("cartDiscount");
    const ewasteEl = document.getElementById("cartEwasteDiverted");
    const totalEl = document.getElementById("cartTotal");

    if (!listEl) return;

    if (this.cart.length === 0) {
      listEl.innerHTML = `
        <div class="empty-cart-view">
          <i class="fa-solid fa-basket-shopping"></i>
          <h4>Your bag is currently empty.</h4>
          <p>Explore this week's certified refurbished drops and help prevent e-waste.</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.innerText = "$0.00";
      if (discountEl) discountEl.innerText = "-$0.00";
      if (ewasteEl) ewasteEl.innerText = "0.0 kg";
      if (totalEl) totalEl.innerText = "$0.00";
      return;
    }

    let subtotal = 0;
    let totalEwaste = 0;

    listEl.innerHTML = this.cart.map((item, idx) => {
      subtotal += item.price;
      totalEwaste += item.ewasteSavedKg;
      return `
        <div class="cart-item-card">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <div style="font-size: 0.75rem; color: var(--neon-primary); margin: 0.2rem 0;">
              <i class="fa-solid fa-leaf"></i> -${item.carbonSavedKg}kg CO₂ | ${item.grade}
            </div>
            <div class="cart-item-price">$${item.price}.00</div>
          </div>
          <button class="cart-item-remove" onclick="app.removeFromCart(${idx})" title="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join('');

    let discount = 0;
    if (this.appliedVoucher) {
      discount = Math.min(this.appliedVoucher.discount, subtotal);
      if (this.appliedVoucher.ewasteBonus) {
        totalEwaste += this.appliedVoucher.ewasteBonus;
      }
    }

    const grandTotal = Math.max(0, subtotal - discount);

    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toLocaleString()}.00`;
    if (discountEl) discountEl.innerText = `-$${discount.toLocaleString()}.00`;
    if (ewasteEl) ewasteEl.innerText = `${totalEwaste.toFixed(1)} kg`;
    if (totalEl) totalEl.innerText = `$${grandTotal.toLocaleString()}.00`;
  }

  checkout() {
    if (this.cart.length === 0) {
      this.showToast("Your cart is empty! Select a refurbished rig first.", "fa-triangle-exclamation");
      return;
    }

    this.sfx.playSuccess();
    this.toggleCart(false);

    // Generate Order ID & SDG 12 Digital Certificate
    const orderId = `ECO-${Math.floor(100000 + Math.random() * 900000)}`;
    const totalCarbon = this.cart.reduce((acc, i) => acc + i.carbonSavedKg, 0);
    const totalEwaste = this.cart.reduce((acc, i) => acc + i.ewasteSavedKg, 0) + (this.appliedVoucher?.ewasteBonus || 0);
    const trees = Math.round(totalCarbon / 20.8) + 5; // EcoRig plants 5 trees per sale

    const certModal = document.getElementById("orderModal");
    const certBody = document.getElementById("certModalBody");

    certBody.innerHTML = `
      <div class="cert-emblem">
        <i class="fa-solid fa-award"></i>
      </div>
      <h2 style="font-size: 1.8rem; font-weight: 900; color: var(--neon-primary); margin-bottom: 0.4rem;">
        ORDER RECERTIFIED & CONFIRMED!
      </h2>
      <div class="cert-order-id">TRANSACTION AUDIT ID: ${orderId}</div>
      <p style="color: #cbd5e1; font-size: 0.95rem; max-width: 540px; margin: 0 auto;">
        Thank you for choosing circular hardware. You’ve officially prevented toxic electronics from entering global e-waste streams while keeping competitive gaming at full throttle.
      </p>

      <div class="cert-card-box">
        <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--neon-primary); margin-bottom: 0.8rem; font-weight: 700;">
          <i class="fa-solid fa-certificate"></i> UNITED NATIONS SDG 12 AUDIT LEDGER
        </div>
        <div class="cert-grid">
          <div class="cert-stat-item">
            <span class="cert-stat-val">${totalEwaste.toFixed(1)} kg</span>
            <span class="cert-stat-lbl">Toxic E-Waste Diverted</span>
          </div>
          <div class="cert-stat-item">
            <span class="cert-stat-val">${totalCarbon} kg</span>
            <span class="cert-stat-lbl">Carbon Emissions Avoided</span>
          </div>
          <div class="cert-stat-item">
            <span class="cert-stat-val">${trees}</span>
            <span class="cert-stat-lbl">Mangroves Dedicated</span>
          </div>
        </div>
      </div>

      <div style="background: rgba(255,255,255,0.03); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; text-align: left; font-size: 0.82rem; color: var(--text-muted);">
        <div><strong>Recertified Rig(s):</strong> ${this.cart.map(c => c.title).join(", ")}</div>
        <div style="margin-top: 0.3rem;"><strong>Dispatch Logistics:</strong> 100% Recycled Mycelium Cushioning via Carbon-Neutral Ground Freight.</div>
        <div style="margin-top: 0.3rem;"><strong>Warranty Period:</strong> 24 Months Hardware Guarantee Active.</div>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-primary-neon" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print SDG 12 Certificate
        </button>
        <button class="btn btn-glass" onclick="app.closeModal('orderModal'); app.clearCart();">
          Continue Exploring Drops
        </button>
      </div>
    `;

    certModal.classList.add("open");
  }

  clearCart() {
    this.cart = [];
    this.appliedVoucher = null;
    this.updateCartCount();
    this.updateCartDrawer();
  }

  // ===========================================================================
  // 11. SDG 12 GAMER PLEDGE
  // ===========================================================================
  signPledge() {
    if (this.pledgeSigned) {
      this.showToast("You've already signed the Responsible Gamer Pledge!", "fa-circle-check");
      return;
    }

    this.pledgeSigned = true;
    this.sfx.playSuccess();

    // Increment pledge counter in DOM
    const btnText = document.getElementById("pledgeBtnText");
    const msg = document.getElementById("pledgeMsg");

    if (btnText) btnText.innerHTML = `<i class="fa-solid fa-check-double"></i> PLEDGE SIGNED & CERTIFIED`;
    if (msg) msg.innerHTML = `🎉 Thank you! +1 Added to SDG 12 Global Community Ledger!`;

    // Increment visual counter
    const rigsEl = document.getElementById("rigsResurrectedCount");
    if (rigsEl) {
      const current = parseInt(rigsEl.innerText.replace(/,/g, ''), 10);
      rigsEl.innerText = (current + 1).toLocaleString();
    }

    this.showToast("Pledge signed! Welcome to the circular gaming rebellion.", "fa-heart");
  }

  // ===========================================================================
  // 12. NEWSLETTER & DROP ALERTS
  // ===========================================================================
  subscribeNewsletter() {
    const emailInput = document.getElementById("newsletterEmail");
    if (!emailInput || !emailInput.value.includes("@")) {
      this.showToast("Please enter a valid email address.", "fa-triangle-exclamation");
      return;
    }

    this.sfx.playSuccess();
    this.showToast(`Subscribed ${emailInput.value} to exclusive drop alerts!`, "fa-envelope-circle-check");
    this.closeModal("newsletterModal");
    emailInput.value = "";
  }

  // ===========================================================================
  // 13. COUNTDOWNS & LIVE TICKERS
  // ===========================================================================
  startDropCountdown() {
    const el = document.getElementById("dropCountdown");
    if (!el) return;

    let totalSeconds = 2 * 86400 + 14 * 3600 + 38 * 60 + 12;

    setInterval(() => {
      totalSeconds--;
      if (totalSeconds < 0) totalSeconds = 3 * 86400;

      const d = Math.floor(totalSeconds / 86400);
      const h = Math.floor((totalSeconds % 86400) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      const format = num => String(num).padStart(2, '0');
      el.innerText = `${format(d)}d : ${format(h)}h : ${format(m)}m : ${format(s)}s`;
    }, 1000);
  }

  startLiveImpactTickers() {
    // Subtle real-time increments simulating active recycling network
    setInterval(() => {
      const heroCounter = document.getElementById("heroDivertedCounter");
      if (heroCounter) {
        let current = parseInt(heroCounter.innerText.replace(/,/g, ''), 10);
        heroCounter.innerText = (current + Math.floor(Math.random() * 3 + 1)).toLocaleString();
      }
    }, 4500);
  }

  // ===========================================================================
  // 14. MODAL & TOAST HELPERS
  // ===========================================================================
  openModal(modalType) {
    this.sfx.playClick();
    if (modalType === "newsletter") {
      document.getElementById("newsletterModal")?.classList.add("open");
    }
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove("open");
  }

  closeAllModals() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("open"));
  }

  showToast(message, iconClass = "fa-bell") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }
}

// Global App Instance
const app = new EcoRigApp();
