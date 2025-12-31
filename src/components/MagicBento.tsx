'use client'

import React, { useRef } from 'react';
import Seo from './ui/cardsDesign/seo';
import Responsive from './ui/cardsDesign/responsive';
import Performance from './ui/cardsDesign/performance';
import MoreSales from './ui/cardsDesign/moreSales';
import Support from './ui/cardsDesign/support';
import Security from './ui/cardsDesign/security';

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  design?: React.ComponentType
}

export interface BentoProps {
  textAutoHide?: boolean;
}

const cardData: BentoCardProps[] = [
  {
    color: 'rgba(255,255,255,.005)',
    title: 'Get Found Easily',
    description: 'Higher Google visibility, more customers.',
    label: 'SEO Optimization',
    design: Seo
  },
  {
   color: 'rgba(255,255,255,.005)',
    title: 'One Website, Every Device',
    description: 'Mobile, tablet, and desktop ready.',
    label: 'Responsive Design',
    design: Responsive
  },
  {
   color: 'rgba(255,255,255,.005)',
    title: 'Speed matters',
    description: 'Fast-loading sites that users love.',
    label: 'High Performance',
    design: Performance
  },
  {
   color: 'rgba(255,255,255,.005)',
    title: 'Client Conversion',
    description: 'Turn Visitors Into Clients',
    label: 'More sales',
    design: MoreSales 
  },
  {
   color: 'rgba(255,255,255,.005)',
    title: '',
    description: '',
    label: 'Support',
    design: Support

  },
  {
   color: 'rgba(255,255,255,.005)',
    title: 'Security',
    description: 'Enterprise-grade protection',
    label: 'Protection',
    design: Security 
  }
];

const SimpleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  className = '',
  style
}) => {
  return (
    <div
      className={`${className} relative`}
      style={style}
    >
      {children}
    </div>
  );
};

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section grid gap-2 w-full select-none relative"
    style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
    ref={gridRef}
  >
    {children}
  </div>
);

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style>
        {`
          .bento-section {
            --border-color: #2a3e16;
            --background-dark: #0a1006;
            --white: hsl(0, 0%, 100%);
          }
          
          .card-responsive {
            grid-template-columns: 1fr;
            width: 100%;
            margin: 0 auto;
            padding:0px 20px;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2 / span 2;
            }
            
            .card-responsive .card:nth-child(6) {
              grid-column: 4;
              grid-row: 3;
            }
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 90%;
              margin: 0 auto;
              padding: 0.5rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}
      </style>

      <BentoCardGrid  gridRef={gridRef}>
        <div id='feature' className="scroll-mt-30 card-responsive grid gap-2">
          {cardData.map((card, index) => {
            const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]`;

            const cardStyle = {
              backgroundColor: card.color || 'var(--background-dark)',
              borderColor: 'var(--border-color)',
              color: 'var(--white)'
            } as React.CSSProperties;

            return (
              <SimpleCard
                key={index}
                className={baseClassName}
                style={cardStyle}
              >
                <div className="card__header flex justify-between gap-3 relative text-white">
                  <span className="card__label text-base">{card.label}</span>
                </div>
                <div>
                  {card.design && <card.design />}
                </div>
                <div className="card__content flex flex-col relative text-white">
                  <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
                    {card.title}
                  </h3>
                  <p
                    className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}
                  >
                    {card.description}
                  </p>
                </div>
              </SimpleCard>
            );
          })}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
