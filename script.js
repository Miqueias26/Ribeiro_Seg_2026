// Menu Toggle Mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close menu when clicking on a link (only for non-dropdown links)
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const parent = link.closest(".dropdown");

    // Se não é um dropdown, fecha o menu
    if (!parent) {
      if (window.innerWidth <= 640) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    }
  });
});

// Dropdown functionality for mobile
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const dropdownLink = dropdown.querySelector(".nav-link");
  dropdownLink.addEventListener("click", (e) => {
    if (window.innerWidth <= 640) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    }
  });

  // Permitir que os links dentro do dropdown funcionem normalmente
  const dropdownItems = dropdown.querySelectorAll(".dropdown-menu a");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (window.innerWidth <= 640) {
        // Fechar o dropdown e o menu
        dropdown.classList.remove("active");
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  });
});

// Smooth Scroll (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "") {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link[href]");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      linkHref === currentPage ||
      (currentPage === "" && linkHref === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Run on page load
setActiveNavLink();

// Hero Animation on Window Load - Similar to trasesa.pt
// Garantir que a animação só aconteça quando a página estiver totalmente carregada
window.addEventListener("load", function () {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    // Pequeno delay para garantir que tudo está carregado e renderizado
    setTimeout(() => {
      heroContent.classList.add("loaded");
    }, 300);
  }
});

// Hero Animation on DOMContentLoaded (backup para páginas rápidas)
document.addEventListener("DOMContentLoaded", function () {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent && !heroContent.classList.contains("loaded")) {
    // Se a página carregar muito rápido, anima após um pequeno delay
    setTimeout(() => {
      if (!heroContent.classList.contains("loaded")) {
        heroContent.classList.add("loaded");
      }
    }, 500);
  }
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll('.nav-link[href^="#"]');

function setActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// Hero Slider
const heroSlides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
let sliderInterval = null;

function showSlide(index) {
  if (heroSlides.length === 0) return;

  heroSlides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  if (heroSlides[index]) {
    heroSlides[index].classList.add("active");
    if (indicators[index]) {
      indicators[index].classList.add("active");
    }
  }
}

function nextSlide() {
  if (heroSlides.length > 0) {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
  }
}

// Auto-advance slider (only if there are multiple slides)
if (heroSlides.length > 1) {
  sliderInterval = setInterval(nextSlide, 5000);
}

// Indicator clicks
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
    // Reset interval
    if (sliderInterval) {
      clearInterval(sliderInterval);
      sliderInterval = setInterval(nextSlide, 5000);
    }
  });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Header Scroll Effect
const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Parallax Effect on Hero
window.addEventListener("scroll", () => {
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    heroImage.style.transform = `translateY(${rate}px) scale(1.1)`;
  }
});

// Animate on Scroll - Advanced
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("reveal", "active");
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 100);
    }
  });
}, observerOptions);

// Observe service cards, news cards, location cards, and contact items
document
  .querySelectorAll(
    ".service-card, .news-card, .location-card, .contact-item, .about-text, .section-header",
  )
  .forEach((card, index) => {
    if (card) {
      card.classList.add("reveal");
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      card.style.transition =
        "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      observer.observe(card);
    }
  });

// Form Validation (if forms are added later)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = "#e74c3c";
    } else {
      input.style.borderColor = "#27ae60";
    }
  });

  return isValid;
}

// Lazy Loading Images (if images are added)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  const isMobile = window.innerWidth <= 640;

  if (!e.target.closest(".dropdown") && isMobile) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});

// Prevent dropdown from closing when clicking inside
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// WhatsApp Form Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const nome = formData.get("nome");
    const empresa = formData.get("empresa") || "Não informado";
    const telefone = formData.get("telefone");
    const email = formData.get("email");
    const servico = formData.get("servico");
    const mensagem = formData.get("mensagem") || "Sem mensagem adicional";

    // Número do WhatsApp (substitua pelo número real)
    const whatsappNumber = "5516997761982"; // Formato: 5516997761982 (sem espaços, parênteses ou hífens)

    // Montar mensagem para WhatsApp
    const whatsappMessage = `*Nova Solicitação de Orçamento - Ribeiro Segurança do Trabalho*

*Nome:* ${nome}
*Empresa:* ${empresa}
*Telefone:* ${telefone}
*Email:* ${email}
*Serviço de Interesse:* ${servico}

*Mensagem:*
${mensagem}

---
_Enviado através do site_`;

    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Criar URL do WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp em nova aba
    window.open(whatsappURL, "_blank");

    // Mostrar mensagem de sucesso
    showNotification(
      "Formulário enviado! Redirecionando para WhatsApp...",
      "success",
    );

    // Limpar formulário após 1 segundo
    setTimeout(() => {
      contactForm.reset();
    }, 1000);
  });
}

// Phone Mask
const phoneInput = document.getElementById("telefone");
if (phoneInput) {
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      if (value.length < 14) {
        value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
      }
      e.target.value = value;
    }
  });
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

console.log(
  "Ribeiro Segurança do Trabalho - Website carregado com sucesso! | São Paulo - SP",
);
