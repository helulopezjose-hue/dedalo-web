"use client";

import { useState } from "react";

const MAKE_WEBHOOK_URL = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL ?? "";

const PROFILES: Record<string, {
  id: string; label: string; icon: string; color: string;
  heading: string; body: string; cta: string; cadence: string;
}> = {
  urgente: {
    id: "urgente", label: "Protección urgente", icon: "🚨", color: "var(--danger)",
    heading: "Tu diagnóstico es claro: tienes personas que dependen de ti y hoy están expuestas.",
    body: "No es una crítica — es una realidad que la mayoría no ve hasta que alguien se los dice directamente. Lo importante es que llegaste aquí antes de que algo lo hiciera evidente de otra forma.\n\nLas brechas que detectamos no requieren una solución costosa ni complicada. Requieren una decisión. Y el mejor momento para tomarla es ahora, mientras tienes salud, mientras tienes ingresos y mientras la prima es todavía accesible.",
    cta: "Agenda tu diagnóstico gratuito — en 30 minutos sabrás exactamente qué necesitas y cuánto cuesta proteger lo que más importa.",
    cadence: "🔴 Contacto recomendado: hoy mismo",
  },
  constructor: {
    id: "constructor", label: "Constructor patrimonial", icon: "🏗️", color: "var(--accent-gold)",
    heading: "Tienes algo que muy pocas personas aprovechan: el tiempo a tu favor.",
    body: "A tu edad, protegerte cuesta una fracción de lo que costará en cinco años. Y cada mes que pasa sin una estructura de protección es un mes en que estás construyendo sobre terreno expuesto.\n\nLa buena noticia es que tu situación es ideal para diseñar algo que no solo te proteja — sino que también trabaje para ti a largo plazo.",
    cta: "Agenda tu diagnóstico gratuito — te muestro cómo protegerte hoy y construir patrimonio al mismo tiempo.",
    cadence: "🟡 Contacto recomendado: primeras 48 horas",
  },
  familia: {
    id: "familia", label: "Familia primero", icon: "👨‍👩‍👧", color: "#E07A4C",
    heading: "Detrás de cada número en este diagnóstico hay personas reales que dependen de ti.",
    body: "Lo que detectamos no es solo un gap en coberturas — es una pregunta que merece respuesta: si mañana no estuvieras, ¿tu familia estaría bien?\n\nNo tienes que resolver todo de golpe. Pero sí hay un primer paso que marca la diferencia entre estar expuesto y estar protegido. Y ese paso es más sencillo de lo que crees.",
    cta: "Agenda tu diagnóstico gratuito — diseñamos juntos la protección que tu familia merece.",
    cadence: "🔴 Contacto recomendado: hoy mismo",
  },
  empresario: {
    id: "empresario", label: "Empresario expuesto", icon: "🏢", color: "#7B68EE",
    heading: "Construiste algo con años de trabajo. Este diagnóstico muestra que ese esfuerzo tiene hoy más exposición de la que debería.",
    body: "Un negocio sin estructura de protección no solo pone en riesgo el patrimonio empresarial — pone en riesgo todo lo personal que está conectado a él.\n\nLa protección empresarial no es un gasto. Es lo que hace que lo que construiste pueda sobrevivir cualquier imprevisto — incluyendo los que involucran a las personas clave del negocio.",
    cta: "Agenda tu diagnóstico gratuito — analizamos juntos cómo proteger tu negocio y tu patrimonio personal.",
    cadence: "🔴 Contacto recomendado: primeras 24 horas",
  },
};

const questions = [
  { id: "birthYear", section: "Tu perfil", question: "¿En qué año naciste?", type: "select",
    options: Array.from({ length: 57 }, (_, i) => ({ label: String(2005 - i), value: String(2005 - i) })) },
  { id: "civilStatus", section: "Tu perfil", question: "¿Cuál es tu estado civil?", type: "single",
    options: [{ label: "Soltero/a", value: "single", icon: "👤" }, { label: "En pareja / Unión libre", value: "partner", icon: "💑" }, { label: "Casado/a", value: "married", icon: "💍" }, { label: "Divorciado/a", value: "divorced", icon: "🔄" }] },
  { id: "dependents", section: "Tu perfil", question: "¿Cuántas personas dependen económicamente de ti?", type: "single",
    options: [{ label: "Ninguna por ahora", value: "0", icon: "🙋" }, { label: "1 persona", value: "1", icon: "👨‍👧" }, { label: "2 a 3 personas", value: "2-3", icon: "👨‍👩‍👧" }, { label: "4 o más personas", value: "4+", icon: "👨‍👩‍👧‍👦" }] },
  { id: "occupation", section: "Tu perfil", question: "¿Cómo describirías tu actividad principal?", type: "single",
    options: [{ label: "Empleado / Trabajador independiente", value: "employee", icon: "💼" }, { label: "Profesionista independiente", value: "professional", icon: "🎓" }, { label: "Empresario / Negocio propio o familiar", value: "business", icon: "🏢" }, { label: "En transición o estudiando", value: "transition", icon: "🔄" }] },
  { id: "income", section: "Tu situación económica", question: "¿En qué rango está tu ingreso neto mensual aproximado?", type: "single",
    options: [{ label: "Menos de $10,000", value: "low", icon: "💼" }, { label: "$10,000 a $25,000", value: "mid-low", icon: "💼" }, { label: "$25,000 a $50,000", value: "mid", icon: "💼" }, { label: "$50,000 a $100,000", value: "mid-high", icon: "💼" }, { label: "Más de $100,000", value: "high", icon: "💼" }] },
  { id: "debts", section: "Tu situación económica", question: "¿Tienes deudas o créditos activos?", type: "single",
    options: [{ label: "No tengo deudas activas", value: "none", icon: "✅" }, { label: "Cuota mensual menor a $5,000", value: "low", icon: "📋" }, { label: "Cuota mensual de $5,000 a $15,000", value: "mid", icon: "📋" }, { label: "Cuota mensual mayor a $15,000", value: "high", icon: "📋" }] },
  { id: "cushion", section: "Tu colchón financiero", question: "Si no pudieras trabajar 2 meses, ¿cuánto tiempo sostendrías tu estilo de vida?", type: "single",
    options: [{ label: "Menos de 1 mes", value: "critical", icon: "🚨" }, { label: "1 a 3 meses", value: "low", icon: "⚠️" }, { label: "3 a 6 meses", value: "mid", icon: "🟡" }, { label: "Más de 6 meses", value: "good", icon: "✅" }] },
  { id: "currentInsurance", section: "Tu protección actual", question: "¿Con qué seguros cuentas hoy?", type: "multi",
    options: [{ label: "Seguro de vida", value: "life", icon: "🛡️" }, { label: "Gastos médicos mayores privado", value: "gmm", icon: "🏥" }, { label: "IMSS / ISSSTE", value: "imss", icon: "🏛️" }, { label: "Seguro de auto", value: "auto", icon: "🚗" }, { label: "Seguro de hogar", value: "home", icon: "🏠" }, { label: "Ninguno", value: "none", icon: "❌" }] },
  { id: "protectionScore", section: "Tu protección actual", question: "Del 1 al 5, ¿qué tan protegido/a te sientes hoy?", type: "scale",
    options: [{ label: "1\nNada\nprotegido/a", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" }, { label: "5\nCompletamente\nprotegido/a", value: "5" }] },
  { id: "concerns", section: "Lo que más te preocupa", question: "¿Qué situaciones te generan más preocupación? (Elige hasta 3)", type: "multi", max: 3,
    options: [{ label: "Una enfermedad grave que afecte mi economía", value: "illness", icon: "🏥" }, { label: "Que mi familia quede desprotegida si me falta", value: "family", icon: "💔" }, { label: "Un accidente o invalidez que me impida trabajar", value: "accident", icon: "🦽" }, { label: "No tener suficiente para retirarme con tranquilidad", value: "retirement", icon: "🏖️" }, { label: "No poder costear la educación de mis hijos", value: "education", icon: "📚" }, { label: "Que algo le pase a mi negocio", value: "business", icon: "🏢" }, { label: "No sé qué me falta — por eso estoy aquí", value: "unknown", icon: "🤷" }] },
  { id: "futurePlans", section: "Tus planes", question: "¿Qué planes tienes para los próximos años?", type: "multi",
    options: [{ label: "Comprar casa o departamento", value: "home", icon: "🏠" }, { label: "Tener o ampliar mi familia", value: "family", icon: "👶" }, { label: "Hacer crecer mi negocio", value: "business", icon: "📈" }, { label: "Retirarme con una pensión digna", value: "retirement", icon: "🌅" }, { label: "Costear estudios de mis hijos", value: "education", icon: "🎓" }, { label: "Ninguno por ahora", value: "none", icon: "⏸️" }] },
  { id: "triggerEvent", section: "Lo que te trajo aquí", question: "¿Hubo algo específico que te motivó a hacer este diagnóstico hoy? (opcional)", type: "open" },
  { id: "budget", section: "Tu inversión en protección", question: "¿Cuánto estarías dispuesto/a a invertir mensualmente en tu protección?", type: "single",
    options: [{ label: "Menos de $500 al mes", value: "very-low", icon: "💰" }, { label: "$500 a $1,500 al mes", value: "low", icon: "💰" }, { label: "$1,500 a $3,500 al mes", value: "mid", icon: "💰" }, { label: "$3,500 a $7,000 al mes", value: "mid-high", icon: "💰" }, { label: "Más de $7,000 al mes", value: "high", icon: "💰" }, { label: "Depende de lo que me recomienden", value: "open", icon: "🤝" }] },
  { id: "contact", section: "Para enviarte tu diagnóstico", question: "¿A dónde te enviamos tu reporte completo?", type: "contact" },
];

type Answers = Record<string, string | string[]>;
type ContactData = { name: string; email: string; phone: string };

interface Gap { label: string; severity: string; desc: string; icon: string }
interface Strength { label: string; icon: string }
interface Profile { id: string; label: string; icon: string; color: string; heading: string; body: string; cta: string; cadence: string }
interface ScoreResult { score: number; levelLabel: string; levelColor: string; gaps: Gap[]; strengths: Strength[]; profile: Profile }

const SECTION_TRANSITIONS: Record<string, string> = {
  "Tu situación económica": "Vas muy bien. Esta sección nos ayuda a entender tu capacidad real de protección.",
  "Tu colchón financiero": "Casi a la mitad. Ahora evaluamos qué tan preparado/a estás ante un imprevisto.",
  "Tu protección actual": "Excelente. Este bloque es el más importante del diagnóstico.",
  "Lo que más te preocupa": "Ya casi terminamos. Cuéntanos lo que más te importa proteger.",
  "Tus planes": "Un paso más. Tus metas nos ayudan a recomendarte la solución más adecuada.",
  "Lo que te trajo aquí": "Casi listo. Esta parte es completamente opcional.",
  "Tu inversión en protección": "Último bloque. Sin compromisos — solo para orientar la recomendación.",
  "Para enviarte tu diagnóstico": "¡Tu diagnóstico está listo! Solo necesitamos saber a dónde enviarlo.",
};

function detectProfile(answers: Answers): Profile {
  const age = answers.birthYear ? 2025 - parseInt(answers.birthYear as string) : null;
  const isYoung = age !== null && age <= 32;
  const hasDependents = answers.dependents && answers.dependents !== "0";
  const isMarried = ["married", "partner"].includes(answers.civilStatus as string);
  const isBusiness = answers.occupation === "business";
  const hasLife = ((answers.currentInsurance as string[]) || []).includes("life");
  const hasHighIncome = ["mid", "mid-high", "high"].includes(answers.income as string);
  const concernsBusiness = ((answers.concerns as string[]) || []).includes("business") || ((answers.futurePlans as string[]) || []).includes("business");

  if (isBusiness && (concernsBusiness || hasHighIncome) && !hasLife) return PROFILES.empresario;
  if (hasDependents && !hasLife && (answers.debts !== "none" || answers.cushion === "critical")) return PROFILES.urgente;
  if ((isMarried || hasDependents) && !hasLife) return PROFILES.familia;
  if (isYoung && !hasDependents) return PROFILES.constructor;
  return PROFILES.urgente;
}

function computeScore(answers: Answers): ScoreResult {
  let score = 100;
  const gaps: Gap[] = [];
  const strengths: Strength[] = [];
  const ins = (answers.currentInsurance as string[]) || [];
  const hasLife = ins.includes("life");
  const hasGMM = ins.includes("gmm") || ins.includes("imss");
  const { dependents, cushion, debts, occupation } = answers;
  const concerns = (answers.concerns as string[]) || [];
  const plans = (answers.futurePlans as string[]) || [];

  if (!hasLife) { score -= 30; gaps.push({ label: "Sin seguro de vida", severity: "critical", desc: "Tu familia o patrimonio quedan expuestos ante un evento inesperado.", icon: "🛡️" }); }
  else strengths.push({ label: "Seguro de vida activo", icon: "✅" });

  if (!hasGMM) { score -= 25; gaps.push({ label: "Sin cobertura médica privada", severity: "critical", desc: "Una hospitalización sin cobertura puede comprometer tu patrimonio en semanas.", icon: "🏥" }); }
  else strengths.push({ label: "Cobertura médica activa", icon: "✅" });

  if (cushion === "critical") { score -= 20; gaps.push({ label: "Colchón financiero crítico", severity: "high", desc: "Menos de un mes de reserva te deja sin margen ante cualquier imprevisto.", icon: "🚨" }); }
  else if (cushion === "low") { score -= 10; gaps.push({ label: "Colchón financiero limitado", severity: "medium", desc: "1 a 3 meses de reserva es insuficiente para eventos de mediano plazo.", icon: "⚠️" }); }
  else if (cushion === "good") strengths.push({ label: "Reserva financiera sólida", icon: "✅" });

  if (dependents && dependents !== "0" && !hasLife) { score -= 10; gaps.push({ label: "Dependientes sin cobertura de vida", severity: "high", desc: "Tienes personas que dependen de ti. Su bienestar debe estar asegurado.", icon: "👨‍👩‍👧" }); }
  if (debts && debts !== "none" && !hasLife) { score -= 8; gaps.push({ label: "Deudas sin respaldo de protección", severity: "medium", desc: "Tus obligaciones financieras quedan descubiertas ante una incapacidad.", icon: "📋" }); }
  if (concerns.includes("retirement") || plans.includes("retirement")) { score -= 5; gaps.push({ label: "Sin plan de retiro estructurado", severity: "low", desc: "El retiro requiere planeación temprana para generar el patrimonio necesario.", icon: "🏖️" }); }
  if (occupation === "business" && (concerns.includes("business") || plans.includes("business"))) { score -= 7; gaps.push({ label: "Negocio sin protección patrimonial", severity: "medium", desc: "Un negocio expuesto representa un riesgo doble: personal y empresarial.", icon: "🏢" }); }

  score = Math.max(0, Math.min(100, score));
  let levelLabel: string, levelColor: string;
  if (score >= 80) { levelLabel = "Bien protegido/a"; levelColor = "var(--success)"; }
  else if (score >= 60) { levelLabel = "Protección parcial"; levelColor = "#E8A84C"; }
  else if (score >= 40) { levelLabel = "Protección insuficiente"; levelColor = "#E07A4C"; }
  else { levelLabel = "Exposición crítica"; levelColor = "var(--danger)"; }

  return { score, levelLabel, levelColor, gaps, strengths, profile: detectProfile(answers) };
}

async function enviarAMake(answers: Answers, contactData: ContactData, scoreResult: ScoreResult) {
  if (!MAKE_WEBHOOK_URL) return false;
  const age = answers.birthYear ? new Date().getFullYear() - parseInt(answers.birthYear as string) : null;
  const payload = {
    nombre: contactData.name, email: contactData.email, whatsapp: contactData.phone || "",
    score_diagnostico: scoreResult.score, nivel_proteccion: scoreResult.levelLabel,
    perfil_dedalo: scoreResult.profile.id,
    temperatura_sugerida: scoreResult.score >= 60 ? "Tibio+" : "Caliente",
    prioridad_sugerida: scoreResult.score < 50 ? "Alta" : scoreResult.score < 75 ? "Media" : "Baja",
    producto_prioritario: ((answers.currentInsurance as string[]) || []).includes("gmm") ? "Vida" : "GMM",
    año_nacimiento: answers.birthYear || "", edad: age,
    estado_civil: answers.civilStatus || "", dependientes: answers.dependents || "",
    ocupacion: answers.occupation || "", ingreso_rango: answers.income || "",
    deudas: answers.debts || "", colchon_financiero: answers.cushion || "",
    seguros_actuales: ((answers.currentInsurance as string[]) || []).join(", "),
    autopercepcion_proteccion: answers.protectionScore || "",
    preocupaciones: ((answers.concerns as string[]) || []).join(", "),
    planes_futuros: ((answers.futurePlans as string[]) || []).join(", "),
    evento_detonador: answers.triggerEvent || "", presupuesto_mensual: answers.budget || "",
    brechas: scoreResult.gaps.map(g => g.label).join(", "),
    fortalezas: scoreResult.strengths.map(s => s.label).join(", "),
    fuente: "Diagnóstico Web DÉDALO", fecha_diagnostico: new Date().toISOString(),
    etapa_inicial: "NUEVO", sistema_inicial: "CARONTE",
  };
  try {
    await fetch(MAKE_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    return true;
  } catch {
    return false;
  }
}

// ─── Styles ────────────────────────────────────────────────────
const S = {
  wrap: { minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" as const, alignItems: "center", position: "relative" as const },
  cont: { width: "100%", maxWidth: "600px", padding: "32px 24px 80px", position: "relative" as const, zIndex: 1 },
  card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px 24px" },
  btn: (active: boolean) => ({
    background: active ? "var(--accent-gold-muted)" : "var(--card)",
    border: `1px solid ${active ? "var(--border-gold)" : "var(--border)"}`,
    borderRadius: "10px",
    padding: "12px 15px",
    color: "var(--text)",
    fontSize: "14px",
    cursor: "pointer",
    textAlign: "left" as const,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "all 150ms",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
  }),
  primaryBtn: {
    background: "var(--accent-blue)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "13px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    flex: 1,
    transition: "background 200ms",
    fontFamily: "'Inter', sans-serif",
  },
  disabledBtn: {
    background: "var(--border)",
    color: "var(--muted)",
    border: "none",
    borderRadius: "8px",
    padding: "13px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "not-allowed",
    flex: 1,
    fontFamily: "'Inter', sans-serif",
  },
};

export default function DiagnosticoForm() {
  const [step, setStep] = useState<"intro" | "quiz" | "analysis" | "result">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [openText, setOpenText] = useState("");
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [animating, setAnimating] = useState(false);
  const [contactData, setContactData] = useState<ContactData>({ name: "", email: "", phone: "" });
  const [analysisStep, setAnalysisStep] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [transitionMsg, setTransitionMsg] = useState("");

  const totalQ = questions.length;
  const q = questions[currentQ];
  const progress = (currentQ / totalQ) * 100;

  function handleAnswer(qId: string, value: string, type: string, max?: number) {
    if (type === "multi") {
      const prev = (answers[qId] as string[]) || [];
      let next: string[];
      if (value === "none") { next = prev.includes("none") ? [] : ["none"]; }
      else {
        const filtered = prev.filter(v => v !== "none");
        if (filtered.includes(value)) next = filtered.filter(v => v !== value);
        else { if (max && filtered.length >= max) return; next = [...filtered, value]; }
      }
      setAnswers(p => ({ ...p, [qId]: next }));
    } else setAnswers(p => ({ ...p, [qId]: value }));
  }

  function canProceed() {
    if (q.type === "contact") return contactData.name.length > 1 && contactData.email.includes("@");
    if (q.type === "open") return true;
    if (q.type === "multi") return ((answers[q.id] as string[]) || []).length > 0;
    return !!answers[q.id];
  }

  function nextQuestion() {
    if (!canProceed()) return;
    if (q.type === "open") setAnswers(p => ({ ...p, [q.id]: openText }));
    const next = currentQ + 1;
    if (next < totalQ) {
      const nextSec = questions[next].section;
      const msg = SECTION_TRANSITIONS[nextSec];
      if (msg && nextSec !== q.section) {
        setTransitionMsg(msg); setShowTransition(true);
        setTimeout(() => {
          setShowTransition(false); setAnimating(true);
          setTimeout(() => { setCurrentQ(next); setAnimating(false); }, 250);
        }, 1600);
        return;
      }
    }
    setAnimating(true);
    setTimeout(() => { if (next < totalQ) setCurrentQ(next); else startAnalysis(); setAnimating(false); }, 250);
  }

  function prevQuestion() {
    if (currentQ > 0) { setAnimating(true); setTimeout(() => { setCurrentQ(p => p - 1); setAnimating(false); }, 200); }
  }

  function startAnalysis() {
    setStep("analysis"); setAnalysisStep(0);
    let i = 0;
    const iv = setInterval(() => {
      i++; setAnalysisStep(i);
      if (i >= 5) {
        clearInterval(iv);
        setTimeout(() => {
          const scoreResult = computeScore(answers);
          setResult(scoreResult);
          setStep("result");
          enviarAMake(answers, contactData, scoreResult);
        }, 500);
      }
    }, 650);
  }

  // ─── Intro ──────────────────────────────────────────────────
  if (step === "intro") return (
    <div style={S.wrap}>
      <div style={S.cont}>
        <div style={{ ...S.card, textAlign: "center", padding: "40px 32px" }}>
          <div style={{
            width: "64px", height: "64px", borderRadius: "50%",
            background: "var(--accent-gold-muted)", border: "1px solid var(--border-gold)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "26px", margin: "0 auto 24px",
          }}>🛡️</div>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "var(--text)", marginBottom: "12px", letterSpacing: "-0.01em" }}>
            ¿Sabes qué tan protegido/a<br />
            <span style={{ color: "var(--accent-gold)" }}>estás realmente?</span>
          </h2>

          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 28px" }}>
            En menos de 5 minutos descubrirás tus brechas de protección y recibirás
            un diagnóstico personalizado completamente gratuito.
          </p>

          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "28px" }}>
            {[["⏱️", "~5 min"], ["📊", "Resultado inmediato"], ["🎯", "Personalizado"]].map(([ic, lb]) => (
              <div key={lb} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "18px", marginBottom: "4px" }}>{ic}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)" }}>{lb}</div>
              </div>
            ))}
          </div>

          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "8px", padding: "14px 18px", marginBottom: "28px", textAlign: "left",
          }}>
            <div className="label-tag" style={{ marginBottom: "6px" }}>🔒 Aviso de confidencialidad</div>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
              La información que compartas es <strong style={{ color: "var(--text)" }}>estrictamente confidencial</strong>.
              Se usa únicamente para tu diagnóstico y no se comparte con terceros.
            </p>
          </div>

          <button
            onClick={() => setStep("quiz")}
            style={{ ...S.primaryBtn, width: "100%", padding: "14px", fontSize: "15px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-blue-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-blue)")}
          >
            Iniciar mi diagnóstico →
          </button>
        </div>
      </div>
    </div>
  );

  // ─── Transition ─────────────────────────────────────────────
  if (showTransition) return (
    <div style={{ ...S.wrap, justifyContent: "center", minHeight: "60vh" }}>
      <div style={{ textAlign: "center", padding: "40px 32px", maxWidth: "360px" }}>
        <div style={{ fontSize: "28px", marginBottom: "16px" }}>✨</div>
        <p style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.6, fontStyle: "italic" }}>
          {transitionMsg}
        </p>
      </div>
    </div>
  );

  // ─── Quiz ────────────────────────────────────────────────────
  if (step === "quiz") return (
    <div style={S.wrap}>
      <div style={S.cont}>
        {/* Progress */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span className="label-tag">{q.section}</span>
            <span style={{ fontSize: "12px", color: "var(--accent-gold)", fontWeight: 600 }}>
              {currentQ + 1} / {totalQ}
            </span>
          </div>
          <div style={{ height: "2px", background: "var(--border)", borderRadius: "2px" }}>
            <div style={{
              height: "100%", borderRadius: "2px",
              background: "linear-gradient(90deg, var(--accent-blue), var(--accent-gold))",
              width: `${progress}%`, transition: "width 0.4s ease",
            }} />
          </div>
        </div>

        {/* Question */}
        <div style={{ opacity: animating ? 0 : 1, transition: "opacity 0.25s", minHeight: "340px" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 600, color: "var(--text)", marginBottom: "24px", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
            {q.question}
          </h2>

          {q.type === "select" && (
            <select
              value={(answers[q.id] as string) || ""}
              onChange={e => handleAnswer(q.id, e.target.value, "select")}
              style={{
                width: "100%", padding: "12px 14px",
                background: "var(--card)", border: "1px solid var(--border-gold)",
                borderRadius: "8px", color: "var(--text)", fontSize: "14px",
                cursor: "pointer", outline: "none", fontFamily: "'Inter', sans-serif",
              }}
            >
              <option value="">Selecciona tu año de nacimiento</option>
              {q.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          )}

          {q.type === "single" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {q.options.map(o => (
                <button key={o.value} onClick={() => handleAnswer(q.id, o.value, "single")} style={S.btn(answers[q.id] === o.value)}>
                  {o.icon && <span style={{ fontSize: "16px" }}>{o.icon}</span>}
                  <span style={{ flex: 1 }}>{o.label}</span>
                  {answers[q.id] === o.value && <span style={{ color: "var(--accent-gold)", fontSize: "13px" }}>✓</span>}
                </button>
              ))}
            </div>
          )}

          {q.type === "multi" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {"max" in q && q.max && (
                <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "2px" }}>
                  Selecciona hasta {q.max}
                </div>
              )}
              {q.options.map(o => {
                const sel = ((answers[q.id] as string[]) || []).includes(o.value);
                return (
                  <button key={o.value} onClick={() => handleAnswer(q.id, o.value, "multi", "max" in q ? q.max : undefined)} style={S.btn(sel)}>
                    {o.icon && <span style={{ fontSize: "15px" }}>{o.icon}</span>}
                    <span style={{ flex: 1 }}>{o.label}</span>
                    {sel && <span style={{ color: "var(--accent-gold)", fontSize: "13px" }}>✓</span>}
                  </button>
                );
              })}
            </div>
          )}

          {q.type === "scale" && (
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
              {q.options.map(o => (
                <button
                  key={o.value}
                  onClick={() => handleAnswer(q.id, o.value, "single")}
                  style={{
                    background: answers[q.id] === o.value ? "var(--accent-gold-muted)" : "var(--card)",
                    border: `2px solid ${answers[q.id] === o.value ? "var(--accent-gold)" : "var(--border)"}`,
                    borderRadius: "10px", padding: "13px 8px",
                    color: answers[q.id] === o.value ? "var(--accent-gold)" : "var(--muted)",
                    fontSize: "11px", cursor: "pointer", width: "72px",
                    whiteSpace: "pre-line", textAlign: "center", lineHeight: 1.3,
                    transition: "all 150ms", fontWeight: answers[q.id] === o.value ? 700 : 400,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {o.label}
                </button>
              ))}
            </div>
          )}

          {q.type === "open" && (
            <div>
              <textarea
                value={openText}
                onChange={e => setOpenText(e.target.value)}
                placeholder="Escribe lo que quieras... (opcional)"
                style={{
                  width: "100%", minHeight: "90px", padding: "12px 14px",
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "8px", color: "var(--text)", fontSize: "14px",
                  resize: "vertical", outline: "none", fontFamily: "'Inter', sans-serif",
                  boxSizing: "border-box",
                }}
              />
              <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "6px" }}>
                Completamente opcional. Tu respuesta ayuda al asesor a entender mejor tu contexto.
              </p>
            </div>
          )}

          {q.type === "contact" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { key: "name", label: "Tu nombre", placeholder: "¿Cómo te llamas?", type: "text" },
                { key: "email", label: "Correo electrónico", placeholder: "Para enviarte tu reporte", type: "email" },
                { key: "phone", label: "WhatsApp (opcional)", placeholder: "Para que el asesor te contacte", type: "tel" },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: "12px", color: "var(--muted)", display: "block", marginBottom: "6px", fontWeight: 500 }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={contactData[f.key as keyof ContactData]}
                    onChange={e => setContactData(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{
                      width: "100%", padding: "11px 14px",
                      background: "var(--card)", border: "1px solid var(--border)",
                      borderRadius: "8px", color: "var(--text)", fontSize: "14px",
                      outline: "none", boxSizing: "border-box", fontFamily: "'Inter', sans-serif",
                    }}
                  />
                </div>
              ))}
              <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 }}>
                🔒 Sin spam. Sin llamadas no solicitadas. Solo tu reporte.
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "10px", marginTop: "28px" }}>
          {currentQ > 0 && (
            <button
              onClick={prevQuestion}
              style={{
                background: "transparent", border: "1px solid var(--border)",
                borderRadius: "8px", padding: "11px 16px",
                color: "var(--muted)", fontSize: "13px", cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              ← Anterior
            </button>
          )}
          <button
            onClick={nextQuestion}
            disabled={!canProceed()}
            style={canProceed() ? S.primaryBtn : S.disabledBtn}
            onMouseEnter={e => canProceed() && (e.currentTarget.style.background = "var(--accent-blue-light)")}
            onMouseLeave={e => canProceed() && (e.currentTarget.style.background = "var(--accent-blue)")}
          >
            {currentQ === totalQ - 1 ? "Ver mi diagnóstico →" : "Continuar →"}
          </button>
        </div>
      </div>
    </div>
  );

  // ─── Analysis ────────────────────────────────────────────────
  if (step === "analysis") {
    const msgs = [
      "Procesando tu perfil...",
      "Evaluando coberturas actuales...",
      "Detectando brechas de protección...",
      "Calculando tu nivel de exposición...",
      "Preparando tu diagnóstico personalizado...",
    ];
    return (
      <div style={{ ...S.wrap, justifyContent: "center", minHeight: "60vh" }}>
        <div style={{ textAlign: "center", padding: "40px 24px" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "50%",
            border: "2px solid var(--accent-gold)", borderTopColor: "transparent",
            animation: "spin 1s linear infinite", margin: "0 auto 32px",
          }} />
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
          <h2 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text)", marginBottom: "28px" }}>
            Analizando tu perfil...
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "280px", margin: "0 auto" }}>
            {msgs.map((m, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "10px",
                opacity: i < analysisStep ? 1 : 0.2, transition: "opacity 0.4s",
                fontSize: "13px", color: i < analysisStep ? "var(--text)" : "var(--muted)",
              }}>
                <span style={{ color: i < analysisStep ? "var(--accent-gold)" : "var(--muted)", fontSize: "11px" }}>
                  {i < analysisStep ? "✓" : "○"}
                </span>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ─── Result ──────────────────────────────────────────────────
  if (step === "result" && result) {
    const { score, levelLabel, levelColor, gaps, strengths, profile } = result;
    const C2 = 2 * Math.PI * 44;
    const dash = C2 * (1 - score / 100);

    return (
      <div style={S.wrap}>
        <div style={S.cont}>
          {/* Header */}
          <div style={{ marginBottom: "28px" }}>
            <div className="label-tag" style={{ marginBottom: "6px" }}>Tu Diagnóstico de Protección · DÉDALO</div>
            {contactData.name && (
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>Preparado para {contactData.name}</p>
            )}
          </div>

          {/* Score */}
          <div style={{ ...S.card, textAlign: "center", marginBottom: "16px" }}>
            <div style={{ position: "relative", width: "108px", height: "108px", margin: "0 auto 18px" }}>
              <svg width="108" height="108" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="54" cy="54" r="44" fill="none" stroke="var(--border)" strokeWidth="8" />
                <circle cx="54" cy="54" r="44" fill="none" stroke={levelColor} strokeWidth="8"
                  strokeDasharray={C2} strokeDashoffset={dash} strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 1.5s ease" }} />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: levelColor, lineHeight: 1 }}>{score}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)" }}>/ 100</div>
              </div>
            </div>
            <div style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "20px",
              background: `color-mix(in srgb, ${levelColor} 15%, transparent)`,
              border: `1px solid color-mix(in srgb, ${levelColor} 40%, transparent)`,
              fontSize: "12px", color: levelColor, fontWeight: 700,
            }}>
              {levelLabel}
            </div>
          </div>

          {/* Profile */}
          <div style={{
            background: "var(--card)",
            border: `1px solid var(--border)`,
            borderLeft: `4px solid ${profile.color}`,
            borderRadius: "12px", padding: "22px 20px", marginBottom: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{ fontSize: "20px" }}>{profile.icon}</span>
              <span className="label-tag" style={{ color: profile.color }}>{profile.label}</span>
            </div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)", lineHeight: 1.5, marginBottom: "10px" }}>
              {profile.heading}
            </p>
            {profile.body.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, marginTop: i > 0 ? "8px" : 0 }}>{para}</p>
            ))}
            <div style={{
              marginTop: "14px", padding: "8px 12px",
              background: "var(--surface)", borderRadius: "6px",
            }}>
              <span style={{ fontSize: "12px", color: profile.color }}>{profile.cadence}</span>
            </div>
          </div>

          {/* Gaps */}
          {gaps.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <div className="label-tag" style={{ color: "var(--accent-gold)", marginBottom: "12px" }}>
                Brechas detectadas
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {gaps.map((gap, i) => {
                  const gc = gap.severity === "critical" ? "var(--danger)" : gap.severity === "high" ? "#E8A84C" : gap.severity === "medium" ? "#E07A4C" : "var(--muted)";
                  return (
                    <div key={i} style={{
                      background: "var(--card)", borderLeft: `3px solid ${gc}`,
                      border: `1px solid var(--border)`, borderRadius: "8px",
                      padding: "12px 14px", display: "flex", gap: "10px", alignItems: "flex-start",
                    }}>
                      <span style={{ fontSize: "17px", flexShrink: 0 }}>{gap.icon}</span>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)", marginBottom: "2px" }}>{gap.label}</div>
                        <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{gap.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Strengths */}
          {strengths.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <div className="label-tag" style={{ color: "var(--success)", marginBottom: "12px" }}>
                Lo que ya tienes cubierto
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {strengths.map((s, i) => (
                  <div key={i} style={{
                    background: "rgba(76,175,125,0.1)", border: "1px solid rgba(76,175,125,0.25)",
                    borderRadius: "20px", padding: "4px 14px",
                    fontSize: "12px", color: "var(--success)",
                  }}>
                    {s.icon} {s.label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{
            ...S.card,
            border: "1px solid var(--border-blue)",
            textAlign: "center", marginBottom: "12px",
          }}>
            <div style={{ fontSize: "20px", marginBottom: "12px" }}>🎯</div>
            <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text)", marginBottom: "8px", lineHeight: 1.4 }}>
              Tu diagnóstico está listo.<br />
              <span style={{ color: "var(--accent-gold)" }}>El siguiente paso es tuyo.</span>
            </h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, marginBottom: "20px" }}>
              {profile.cta}
            </p>
            <a
              href="/agenda"
              style={{
                display: "block", background: "var(--accent-blue)", color: "#fff",
                borderRadius: "8px", padding: "13px 28px", fontSize: "14px",
                fontWeight: 600, textDecoration: "none", marginBottom: "8px",
                transition: "background 200ms",
              }}
            >
              Agendar mi cita gratuita →
            </a>
            <p style={{ fontSize: "11px", color: "var(--muted)" }}>Sin costo · Sin compromiso · 30 minutos</p>
          </div>

          {/* Footer */}
          <div style={{ textAlign: "center", fontSize: "11px", color: "var(--muted)", borderTop: "1px solid var(--border)", paddingTop: "18px" }}>
            🔒 Tu información es confidencial · DÉDALO · Arquitectura de Protección
          </div>
        </div>
      </div>
    );
  }

  return null;
}
