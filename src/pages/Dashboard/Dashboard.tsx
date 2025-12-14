import { Card } from '../../components/Card/Card';
import { Table } from '../../components/Table/Table';
import { users } from '../../services/api';
import styles from './Dashboard.module.css';

export function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.kpiGrid}>
                <Card title="Revenue" value="$24,500" subtitle="+12% this month" />
                <Card title="Active Users" value="1,284" subtitle="+8% this week" />
                <Card title="Subscriptions" value="342" subtitle="+5 new today" />
                <Card title="Growth" value="18%" subtitle="Stable growth" />
            </div>

            <Table users={users} />
        </div>
    );
}
