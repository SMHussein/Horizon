import Heading from '@components/Heading';
import Row from '@components/Row';
import Section from '@components/Section';
import { useTranslations } from 'next-intl';
import RolesCard from '@components/RolesCard';
import { getItems } from '@utils/helpers';

function Roles() {
    const t = useTranslations('rolesAndRequirements');
    const supervisorRoles = getItems(t, 'rolesAndRequirements.shiftSupervisor.requirements');
    const officerRoles = getItems(t, 'rolesAndRequirements.securityOfficer.requirements');
    const monitorRoles = getItems(t, 'rolesAndRequirements.cctvMonitor.requirements');

    return (
        <Section id='roles' classes='background-colored-logo' observe={true}>
            <Row classes='py-20'>
                <Heading type={2} classes='text-center mb-20'>
                    {t('title')}
                </Heading>
                <div className='mb-6 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <RolesCard roles={supervisorRoles} title={t('shiftSupervisor.title')} />
                    <RolesCard roles={officerRoles} title={t('securityOfficer.title')} />
                    <RolesCard roles={monitorRoles} title={t('cctvMonitor.title')} />
                </div>
                <p className='text-primary-100 text-xl font-bold text-center text-balance'>
                    {t('requirementsNote')}
                </p>
            </Row>
        </Section>
    );
}

export default Roles;
