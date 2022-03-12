import React, { useEffect } from 'react'
import { log } from 'util'
import PageContainer from '../../components/page-container/PageContainer'
import cl from './TeamsPage.module.scss'
import Toolbar from '../../components/toolbar/Toolbar'
import Search from '../../ui/search/Search'
import Button from '../../ui/button/Button'
import { ButtonTypesEnum } from '../../ui/button/ButtonTypesEnum'
import PageFooter from '../../components/page-footer/PageFooter'
import FooterTools, { ISize } from '../../components/footer-tools/FooterTools'
import { TeamsService } from '../../api/services/teams-service/TeamsService'

const TeamsPage = () => {
    const searchChangeHandler = (value: string) => {
        console.log(value)
    }

    const pageChangeHandler = (value: number) => {
        console.log(value)
    }

    const sizeChangeHandler = (data: ISize) => {
        console.log(data)
    }

    useEffect(() => {
        TeamsService.getTeams().then((r) => console.log(r))
    }, [])

    return (
        <PageContainer>
            <Toolbar>
                <Search onChange={searchChangeHandler} />
                <Button type="button" buttonType={ButtonTypesEnum.Add}>
                    Add +
                </Button>
            </Toolbar>
            <div className={cl.TeamPageContent} />
            <PageFooter>
                <FooterTools
                    pageCount={10}
                    onPageChange={pageChangeHandler}
                    onSizeChange={sizeChangeHandler}
                />
            </PageFooter>
        </PageContainer>
    )
}

export default TeamsPage
