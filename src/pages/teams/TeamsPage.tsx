import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
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
    const [name, setName] = useState<string>()
    const [page, setPage] = useState<string>()
    const [pageSize, setPageSize] = useState<string>()

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        searchParams.set('name', name)
        searchParams.set('page', page)
        searchParams.set('pageSize', pageSize)
        if (!name) {
            searchParams.delete('name')
        }
        if (!page) {
            searchParams.delete('page')
        }
        if (!pageSize) {
            searchParams.delete('pageSize')
        }
        const params = Object.fromEntries([...searchParams])
        setSearchParams(params)
    }, [name, page, pageSize])

    const searchChangeHandler = (value: string) => {
        setName(value)
    }

    const pageChangeHandler = (value: number) => {
        value += 1
        setPage(value.toString())
    }

    const sizeChangeHandler = (data: ISize) => {
        setPageSize(data.value.toString())
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
