import classnames from 'classnames';
import {FC, memo} from 'react';

interface NotificationProps {
  className?: string;
}

const Notification: FC<NotificationProps> = memo(({className}: NotificationProps) => (
  <svg className={classnames('icon', 'icon--notification', className)} viewBox="0 0 60 60">
    <path d="M46.92,19.29c0-6.43-5.26-13.46-14-14.77a3.4,3.4,0,0,0,.27-1.31,3.17,3.17,0,1,0-6.35,0,3.42,3.42,0,0,0,.26,1.31c-8.76,1.31-14,8.34-14,14.77C13.08,35.46,7.39,44,2.5,48.16a4.29,4.29,0,0,0,4.23,4.29H21.54c0,4.72,3.8,7.56,8.46,7.56s8.46-2.83,8.46-7.56H53.27a4.29,4.29,0,0,0,4.23-4.29C52.61,44,46.92,35.46,46.92,19.29ZM34.3,45c0,4.42-1.92,6.55-4.3,6.55S25.7,49.43,25.7,45h-11a53.45,53.45,0,0,0,6.92-25.73c0-1.77,1.49-6.37,8.32-6.37s8.34,4.6,8.34,6.37A53.46,53.46,0,0,0,45.26,45h-11Z" />
  </svg>
));

Notification.defaultProps = {
  className: undefined,
};

export default Notification;
