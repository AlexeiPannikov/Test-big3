import React from 'react'
import PageContainer from '../../components/page-container/PageContainer'
import cl from './TeamsPage.module.scss'
import Toolbar from '../../components/toolbar/Toolbar'
import Search from '../../ui/search/Search'
import Button from '../../ui/button/Button'
import { ButtonTypesEnum } from '../../ui/button/ButtonTypesEnum'
import PageFooter from '../../components/page-footer/PageFooter'
import FooterTools from '../../components/footer-tools/FooterTools'

const TeamsPage = () => {
    const pageClickHandle = ({ selected }: { selected: number }) => {
        console.log(selected)
    }

    return (
        <PageContainer>
            <Toolbar>
                <Search />
                <Button type="button" buttonType={ButtonTypesEnum.Add}>
                    Add +
                </Button>
            </Toolbar>
            <div className={cl.TeamPageContent} />
            <PageFooter>
                <FooterTools onPageChange={pageClickHandle} />
            </PageFooter>
        </PageContainer>
    )
}

export default TeamsPage
