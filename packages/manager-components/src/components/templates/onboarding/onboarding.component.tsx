import React, { PropsWithChildren } from 'react';
import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/react';
import {
  ODS_BUTTON_SIZE,
  ODS_BUTTON_VARIANT,
  ODS_TEXT_LEVEL,
  ODS_TEXT_SIZE,
} from '@ovhcloud/ods-components';

import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import placeholderSrc from './assets/placeholder.png';

export type OnboardingLayoutProps = PropsWithChildren<{
  hideHeadingSection?: boolean;
  title: string;
  orderButtonLabel: string;
  orderHref?: string;
  description?: React.ReactNode;
  moreInfoHref?: string;
  moreInfoButtonLabel?: string;
  onOrderButtonClick?: () => void;
  img?: {
    src: string;
    width?: number;
    height?: number;
  };
  isActionDisabled?: boolean;
}>;

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  hideHeadingSection,
  title,
  description,
  orderHref,
  orderButtonLabel,
  moreInfoHref,
  moreInfoButtonLabel,
  children,
  onOrderButtonClick,
  img,
  isActionDisabled,
}) => {
  return (
    <div className="flex flex-col mx-auto px-3">
      {!hideHeadingSection && (
        <section className="flex flex-col items-center">
          <div className="flex justify-center py-3 max-h-28">
            <img
              className="max-h-150px"
              src={img?.src ?? placeholderSrc}
              alt=""
              width={img?.width}
              height={img?.height}
            />
          </div>
          <OsdsText
            color={ODS_THEME_COLOR_INTENT.primary}
            level={ODS_TEXT_LEVEL.heading}
            size={ODS_TEXT_SIZE._700}
            className="block text-center mb-3"
          >
            {title}
          </OsdsText>
          <OsdsText
            level={ODS_TEXT_LEVEL.body}
            className="block text-center mb-2"
          >
            {description}
          </OsdsText>
          <div className="flex sm:py-8 xs:w-full xs:flex-col sm:items-center sm:w-fit sm:flex-row">
            <div className="w-full xs:py-3">
              <OsdsButton
                color={ODS_THEME_COLOR_INTENT.primary}
                size={ODS_BUTTON_SIZE.md}
                href={orderHref}
                onClick={onOrderButtonClick}
                {...(isActionDisabled && { disabled: true })}
              >
                {orderButtonLabel}
              </OsdsButton>
            </div>
            {moreInfoButtonLabel && moreInfoHref && (
              <div className="w-full sm:m-2 xs:py-3 xs:mb-6">
                <OsdsButton
                  className="sm:ml-1"
                  color={ODS_THEME_COLOR_INTENT.primary}
                  variant={ODS_BUTTON_VARIANT.stroked}
                  size={ODS_BUTTON_SIZE.md}
                >
                  {moreInfoButtonLabel}
                </OsdsButton>
              </div>
            )}
          </div>
        </section>
      )}
      {children}
    </div>
  );
};
