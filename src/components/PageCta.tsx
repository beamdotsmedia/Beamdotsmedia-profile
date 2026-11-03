import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import { useT } from '../i18n';

const PageCta = ({ heading, description }: { heading: string; description: string }) => {
  const t = useT();
  return (
    <section className="section-padding px-6 md:px-8 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-medium">
            {description}
          </p>

          <a
            href="https://wa.me/60167731754"
            target="_blank"
            rel="noreferrer"
            className="inline-flex bg-[#25D366] text-white font-black py-5 px-10 rounded-sm shadow-[0_15px_40px_rgba(37,211,102,0.2)] hover:scale-[1.05] active:scale-95 transition-all items-center justify-center gap-3 text-base uppercase tracking-widest group mb-10"
          >
            <svg className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {t("Chat on WhatsApp", "WhatsApp 联系我们")}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-on-surface-variant tracking-wide">{t("Petaling Jaya, Selangor, Malaysia", "马来西亚雪兰莪八打灵再也")}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-on-surface-variant tracking-wide">+6016-7731754</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageCta;
